import 'react-native';
import 'jest-enzyme';
import '@testing-library/jest-dom';
import Enzyme from 'enzyme';
import React from 'react';
import weekCategoryService from '../weekCategory/weekCategory.service';
import categoryService from '../categories/categoryService';

describe('tests for weekCategoryList', ()=>{
    test('that nothing is displayed if there are no categories for the week', ()=>{
        let returnValues;
        let obj = { data: [] };
        weekCategoryService.getCategories = jest.fn().mockResolvedValueOnce(obj)
        weekCategoryService.getCategories().then((arr: any) => {
            returnValues = arr;
        });
        const wrapper = Enzyme.mount(
            <CategoryList data={returnValues}></CategoryList>
         );
         const skill = wrapper.findWhere((node) => {
             return node.prop('testID') === 'skill'
         });
         expect(skill.first()).toBe('');
         expect(skill.first().text()).toBe('');
    });
    test('that categories display correctly if there are categories for the week', () =>{
        const category = new Category();
        category.skill = 'test';
        const wrapper = Enzyme.mount(
            <CategoryList data={category}></CategoryList>
        );
        const skill = wrapper.findWhere((node) => {
            return node.prop('testID') === 'skill'
        });
        expect(skill.first()).toExist();
        expect(skill.first().text()).toBe('test');
    });

    test('that the button makes a [menu?] appear', ()=>{

    });

    test('that selecting from menu calls addCategory from categoryService and refreshes list', ()=>{

    });

});