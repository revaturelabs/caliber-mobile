/**
 * @jest-environment jsdom
 */
import React from 'react';
import Enzyme from 'enzyme';
import 'react-native';
import 'jest-enzyme';
import '@testing-library/jest-dom';

import BatchWeekSelectionComponent from '../../../qc/batchweek/batchWeekSelection.component';

describe('Batch Week Selection tests', ()=> {
    let wrapper: any;
    beforeAll(()=> {
        wrapper = Enzyme.mount(<BatchWeekSelectionComponent/>);
    })

    test('that the onYearChange callback correctly updates the state', () => {
        wrapper.instance().onYearChange(2001);
        expect(wrapper.state('year')).toEqual(2001);
    });

    test('that the onQuarterChange callback correctly updates the state', () => {
        wrapper.instance().onQuarterChange('Q2', 1);
        expect(wrapper.state('quarter')).toEqual(2);
    });

    test('that the onBatchChange callback correctly updates the store', () => {
        wrapper.instance().onBatchChange('BatchName');
        // check the redux store
    });
});