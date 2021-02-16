import 'react-native';
import 'jest-enzyme';
import '@testing-library/jest-dom';
import Enzyme from 'enzyme';
import React from 'react';
import Category from '../weekCategory/category'
import { CategoryTable } from '../categories/categoryTable';

//changeItem is a function in weekCategoryList that changes the state of the class
import changeItem from '../weekCatetgory/weekCategoryList'
import { FlatList } from 'react-native';
import { useSelector } from 'react-redux';


describe('tests for weekCategoryList', () => {
    test('that nothing is displayed if there are no categories for the week', () => {

    });

    test('that categories display correctly if there are categories for the week', () => {

    });

    test('that the button changes the state', () => {
        //Set up
        const cat1 = new Category(1, 'React', true);
        const cat2 = new Category(2, 'TypeScript', true);
        const testList = [cat1, cat2];
        const testState = { isVisible: false};
        

        //Mount component for testing
        const wrapper = Enzyme.mount(
            <WeekCategoryList data = {testList}></WeekCategoryList>
        );
        wrapper.setState(testState);

        //There is an item with id button and when clicked, state changes
        const button = wrapper.findWhere((node) => node.prop('testID') == 'button').first();
        button.simulate('click');
        expect(wrapper.state('isVisible')).toBe(true);

        //flatList gets data from props
        const flatList = wrapper.find(FlatList)
        expect (flatList.props().data).toEqual(testList);
    });


});