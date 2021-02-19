/**
 * @jest-environment jsdom
 */
import { shallow } from 'enzyme';
import React from 'react';
import 'react-native';
import 'jest-enzyme';
import '@testing-library/jest-dom';
import 'enzyme-adapter-react-16';

import AssociateDetail from '../../associate/AssociateDetail';
import * as AssociateService from '../../associate/AssociateService';
import TechnicalStatus from '../../associate/TechnicalStatus';

const testFeedback = new AssociateService.QCFeedback();
testFeedback.associateId = 'testId';
testFeedback.batchId = 'testBatch';
testFeedback.weekId = 1;
testFeedback.qcTechnicalStatus = 2;
testFeedback.qcNote = 'testNote';

const testAssociate = new AssociateService.Associate();
testAssociate.associateId = testFeedback.associateId;
testAssociate.firstName = 'testFN';
testAssociate.lastName = 'testLN';

test('That the associate\'s name displays', () => {
    const wrapper = shallow(
        <AssociateDetail associate={testAssociate} qcFeedback={testFeedback} />
    );

    const firstName = wrapper.findWhere((node) => {
        return node.prop('testID') === 'firstName';
    });
    expect(firstName.first()).toExist();
    //expect(firstName.first().text()).toBe(testAssociate.firstName);

    const lastName = wrapper.findWhere((node) => {
        return node.prop('testID') === 'lastName';
    });
    expect(lastName.first()).toExist();
    //expect(lastName.first().text()).toBe(testAssociate.lastName);
});

test('That the associate\'s technical status displays', () => {
    const wrapper = shallow(
        <AssociateDetail associate={testAssociate} qcFeedback={testFeedback} />
    );

    const techStatus = wrapper.find(TechnicalStatus);
    expect(techStatus).toHaveLength(1);
    expect(techStatus.first()).toExist();

});

// The current plan is that clicking on the technical status cycles through possible values
test('That pressing on the associate\'s technical status increases it', () => {
    const wrapper = shallow(
        <AssociateDetail associate={testAssociate} qcFeedback={testFeedback} />
    );

    let techStatus = wrapper.findWhere((node) => {
        return node.prop('testID') === 'technicalStatus';
    }).first();
    expect(techStatus.children('TechnicalStatus').prop('status')).toBe(2);

    AssociateService.default.updateAssociate = jest.fn();

    //0=undefined, 1=red sad face, 2=yellow neutral, 3=green happy, 4=star
    //status goes 2 -> 3
    techStatus.props().onPress();
    wrapper.update();
    techStatus = wrapper.findWhere((node) => {
        return node.prop('testID') === 'technicalStatus';
    }).first();
    expect(AssociateService.default.updateAssociate).toHaveBeenCalledTimes(1);
    expect(AssociateService.default.updateAssociate).toHaveBeenLastCalledWith(testFeedback, {'qcStatus': 3});
    expect(techStatus.children('TechnicalStatus').prop('status')).toBe(3);

    //status goes 3 -> 4
    techStatus.props().onPress();
    wrapper.update();
    techStatus = wrapper.findWhere((node) => {
        return node.prop('testID') === 'technicalStatus';
    }).first();
    expect(AssociateService.default.updateAssociate).toHaveBeenCalledTimes(2);
    expect(AssociateService.default.updateAssociate).toHaveBeenLastCalledWith(testFeedback, {'qcStatus': 4});
    expect(techStatus.children('TechnicalStatus').prop('status')).toBe(4);

    //status goes 4 -> 0
    techStatus.props().onPress();
    wrapper.update();
    techStatus = wrapper.findWhere((node) => {
        return node.prop('testID') === 'technicalStatus';
    }).first();
    expect(AssociateService.default.updateAssociate).toHaveBeenCalledTimes(3);
    expect(AssociateService.default.updateAssociate).toHaveBeenLastCalledWith(testFeedback, {'qcStatus': 0});
    expect(techStatus.children('TechnicalStatus').prop('status')).toBe(0);

    //status goes 0 -> 1
    techStatus.props().onPress();
    wrapper.update();
    techStatus = wrapper.findWhere((node) => {
        return node.prop('testID') === 'technicalStatus';
    }).first();
    expect(AssociateService.default.updateAssociate).toHaveBeenCalledTimes(4);
    expect(AssociateService.default.updateAssociate).toHaveBeenLastCalledWith(testFeedback, {'qcStatus': 1});
    expect(techStatus.children('TechnicalStatus').prop('status')).toBe(1);

    //status goes 1 -> 2
    techStatus.props().onPress();
    wrapper.update();
    techStatus = wrapper.findWhere((node) => {
        return node.prop('testID') === 'technicalStatus';
    }).first();
    expect(AssociateService.default.updateAssociate).toHaveBeenCalledTimes(5);
    expect(AssociateService.default.updateAssociate).toHaveBeenLastCalledWith(testFeedback, {'qcStatus': 2});
    expect(techStatus.children('TechnicalStatus').prop('status')).toBe(2);
});

// Not 100% sure this is how our styling will end up, but this is the current concept
test('That there\'s a button that displays this associate\'s note for this week', () => {
    const wrapper = shallow(
        <AssociateDetail associate={testAssociate} qcFeedback={testFeedback} />
    );

    const button = wrapper.findWhere((node) => node.prop('testID') === 'displayNote').first();
    expect(button).toExist();

    let note = wrapper.findWhere((node) => {
        return node.prop('testID') === 'qcNote';
    });

    //Note should not be present to start with
    expect(note.first()).not.toExist();

    //After pressing this button, note should appear
    button.props().onPress();
    wrapper.update();
    note = wrapper.findWhere((node) => {
        return node.prop('testID') === 'qcNote';
    });
    expect(note.first()).toExist();
});

test('That on text input, qcNote is changed', () => {
    const wrapper = shallow(
        <AssociateDetail associate={testAssociate} qcFeedback={testFeedback} />
    );

    const displayButton = wrapper.findWhere((node) => node.prop('testID') === 'displayNote').first();
    displayButton.props().onPress();
    wrapper.update();

    let note = wrapper.findWhere((node) => {
        return node.prop('testID') === 'qcNote';
    });

    const testInput = 'Hello';
    note.simulate('changeText', testInput);
    wrapper.update();

    note = wrapper.findWhere((node) => {
        return node.prop('testID') === 'qcNote';
    });
    expect(note.prop('defaultValue')).toBe(testInput);
});

test('That when the Save Note button is pressed, associate.service is called', () => {
    const wrapper = shallow(
        <AssociateDetail associate={testAssociate} qcFeedback={testFeedback} />
    );

    //make text input and save button appear
    const displayButton = wrapper.findWhere((node) => node.prop('testID') === 'displayNote').first();
    displayButton.props().onPress();
    wrapper.update();

    //input test string
    let note = wrapper.findWhere((node) => {
        return node.prop('testID') === 'qcNote';
    });
    const testInput = 'Hello';
    note.simulate('changeText', testInput);
    wrapper.update();

    const button = wrapper.findWhere((node) => node.prop('testID') === 'saveNote').first();
    expect(button).toExist();

    AssociateService.default.updateAssociate = jest.fn();

    button.props().onPress();
    wrapper.update();
    expect(AssociateService.default.updateAssociate).toHaveBeenCalledTimes(1);
    expect(AssociateService.default.updateAssociate).toHaveBeenLastCalledWith(testFeedback, { 'qcNote': testInput });

});