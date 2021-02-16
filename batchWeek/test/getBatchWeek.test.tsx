/**
 * @jest-environment jsdom
 */
import React from 'react';
import Enzyme, {shallow, mount} from 'enzyme';
import {View, Text, StyleSheet} from 'react-native';
import TestComponent from './test.component';


describe('get all info about specified batch and specified week', () => {


    test("extract specific batch and specific week for given url", () => {
        const url ="http://localhost/qc/batches/batch123/weeks/4";

        let batchId;
        let week;
        expect(batchId).toBe('batch123');
        expect(week).toBe(4);

    });

    test("", () => {
        
    })
})