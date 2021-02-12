/**
 * @jest-environment jsdom
 */
import React from 'react';
import 'react-native';
import 'jest-enzyme';
import '@testing-library/jest-dom';
import Enzyme from 'enzyme';
import 'enzyme-adapter-react-16';

import AssociateDetail from '../associate.detail';
import { associate, qcFeedback } from '../associate.service';

const testFeedback = new qcFeedback();
testFeedback.associateId = 'testId';
testFeedback.batchId = 'testBatch';
testFeedback.weekId = 1;
testFeedback.qcTechnicalStatus = 2;
testFeedback.qcNote = 'testNote';

const testAssociate = new associate();
testAssociate.associateId = testFeedback.associateId;
testAssociate.firstName = 'testFN';
testAssociate.lastName = 'testLN';

const wrapper = Enzyme.mount(
    <AssociateDetail assoc={testAssociate} qcFB={testFeedback}/>
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