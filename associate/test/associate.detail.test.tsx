/**
 * @jest-environment jsdom
 */
import Enzyme from 'enzyme';
import React from 'react';
import 'react-native';
import 'jest-enzyme';
import '@testing-library/jest-dom';
import 'enzyme-adapter-react-16';

import AssociateDetail from '../associate.detail';
import * as AssociateService from '../associate.service';

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

const wrapper = Enzyme.mount(
    <AssociateDetail associate={testAssociate} qcFeedback={testFeedback}/>
);

test('That the associate\'s name displays', () => {
    const firstName = wrapper.findWhere((node) => {
        return node.prop('testID') === 'firstName';
    });
    expect(firstName.first()).toExist();
    expect(firstName.first()).toBe(testAssociate.firstName);

    const lastName = wrapper.findWhere((node) => {
        return node.prop('testID') === 'lastName';
    });
    expect(lastName.first()).toExist();
    expect(lastName.first()).toBe(testAssociate.lastName);
});

test('That the associate\'s technical status displays', () => {

    const techStatus = wrapper.findWhere((node) => {
        return node.prop('testID') === 'techStatus';
    });
    expect(techStatus.first()).toExist();
    // TODO there will probably be a separate component (with tests) to display and cycle through the technical status
    // expect(techStatus.first()).toBe(testFeedback.qcTechnicalStatus);

});

// Not 100% sure this is how our styling will end up, but this is the current concept
test('That there\'s a button that displays/hides this associate\'s note for this week', () => {

    const button = wrapper.findWhere((node) => node.prop('testID') === 'displayNote').first();
    expect(button).toExist();
    
    const note = wrapper.findWhere((node) => {
        return node.prop('testID') === 'qcNote';
    });

    expect(note.first()).not.toExist();
    button.simulate('click');
    expect(note.first()).toExist();
    button.simulate('click');
    expect(note.first()).not.toExist();
});

test('That on text input, qcNote is changed', () => {
    const note = wrapper.findWhere((node) => {
        return node.prop('testID') === 'qcNote';
    });

    const testInput = 'Hello';
    note.simulate('change', { target: { value: testInput } });
    expect(wrapper.state('qcNote')).toBe(testInput);
});

test('That when the Save Note button is pressed, associate.service is called', () => {
    const button = wrapper.findWhere((node) => node.prop('testID') === 'saveNote').first();
    expect(button).toExist();

    AssociateService.patchAssociate = jest.fn();

    button.simulate('click');
    expect(AssociateService.patchAssociate).toHaveBeenCalledTimes(1);
    expect(AssociateService.patchAssociate).toHaveBeenLastCalledWith({'qcNote': wrapper.state('qcNote')});
    
});