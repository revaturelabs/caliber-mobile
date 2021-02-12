/**
 * @jest-environment jsdom
 */
import AssociateComponent from '../associate.component';
import { associate, qcFeedback } from '../associate.service';
import 'react-native';
import 'jest-enzyme';
import '@testing-library/jest-dom';
import Enzyme from 'enzyme';

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

test('That the associate\'s name displays', () => {

    const wrapper = Enzyme.mount(
        <AssociateComponent associate={testAssociate} qcFeedback={testFeedback}/>
    );

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

    const wrapper = Enzyme.mount(
        <AssociateComponent associate={testAssociate} qcFeedback={testFeedback}/>
    );

    const techStatus = wrapper.findWhere((node) => {
        return node.prop('testID') === 'techStatus';
    });
    expect(techStatus.first()).toExist();
    expect(techStatus.first()).toBe(testFeedback.qcTechnicalStatus);

});