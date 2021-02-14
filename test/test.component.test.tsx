import React from 'react';
import Enzyme, {shallow, mount} from 'enzyme';
import {View, Text, StyleSheet} from 'react-native';
import TestComponent from './test.component';

test("testing whether jest and Enzyme are setup properly", () => {
    expect(true).toBeTruthy();

    const wrapper = shallow(<TestComponent />);
    console.log(wrapper.debug());
})
