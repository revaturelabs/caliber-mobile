/**
 * @jest-environment jsdom
 */
import React from 'react';
import Enzyme, {shallow, mount} from 'enzyme';
import {View, Text, StyleSheet} from 'react-native';
import TestComponent from './test.component';

test("testing whether jest and Enzyme are setup properly", () => {
    expect(true).toBeTruthy();

    const wrapper = shallow(<TestComponent />);
   // console.log(wrapper.debug());
});

test("testing whether Enzyme mount works", () => {
    expect(true).toBeTruthy();

    const wrapper = mount(<TestComponent />);
    // console.log(wrapper.debug());
});

test("testing jest mock and function", () => {
    const wrapper = mount(
        <TestComponent />
    );

    const mockedNav = jest.fn();
    jest.mock('@react-navigation/core', () => {
        return {
            useNavigation: ()=> ({navigate: mockedNav})
        }
    });

    const openModal = jest.fn();
    const button = wrapper.findWhere((node: any) => node.prop('testID') === 'openModalButton');
})
