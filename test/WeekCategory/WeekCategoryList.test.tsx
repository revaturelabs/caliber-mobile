import 'react-native';
import 'jest-enzyme';
import '@testing-library/jest-dom';
import Enzyme from 'enzyme';
import React from 'react';
import {weekCategory} from '../../WeekCategories/WeekCategory'
import { CategoryTable } from '../../categories/categoryTable';
import weekCategoryService from '../../WeekCategories/WeekCategoryService';
import { FlatList } from 'react-native';
import { useSelector } from 'react-redux';
import WeekCategoryList from '../../WeekCategories/WeekCategoryList';
import {Category} from '../../categories/Category';


describe('tests for weekCategoryList', () => {
    test('that nothing is displayed if there are no categories for the week', () => {
        let returnValues = 0;
        const wrapper = Enzyme.mount(
            <WeekCategoryList weekId = {returnValues}></WeekCategoryList>
         );
         const skill = wrapper.findWhere((node) => {
             return node.prop('testID') === 'skill'
         });
         expect(skill.first()).toExist();
         expect(skill.first().text()).toBe('');

    });

    test('that categories display correctly if there are categories for the week', () => {
        const category = new Category();
        category.skill = 'test';
        const list = [category];
        const wrapper = Enzyme.mount(
            <WeekCategoryList weekId={0}></WeekCategoryList>
        );
        const skill = wrapper.findWhere((node) => {
            return node.prop('testID') === 'skill'
        });
        expect(skill.first()).toExist();
        expect(skill.first().text()).toBe('test');

    });

    test('that the flatList gets its items from state', () => {
        //Set up
        const cat1 = new Category();
        const cat2 = new Category();
        const testList = [cat1, cat2];

        //Mount component for testing
        const wrapper = Enzyme.mount(
            <WeekCategoryList data = {testList}></WeekCategoryList>
        );

        //flatList gets data from props
        const flatList = wrapper.find(FlatList)
        expect (flatList.props().data).toEqual(testList);

    });


});