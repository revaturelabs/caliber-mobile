/**
 * @jest-environment jsdom
 */

import 'react-native';
import 'jest-enzyme';
import '@testing-library/jest-dom';
import Enzyme, { shallow } from 'enzyme';
import React from 'react';
import { FlatList } from 'react-native';
import { WeekCategoryList } from '../../weekCategories/WeekCategoryList';
import categoryService from '../../categoriesFeature/CategoryService';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import weekCategoryService from '../../weekCategories/WeekCategoryService';
import { getWeekCategories } from '../../store/actions';
import { Category } from '../../categoriesFeature/Category';
import { exp } from 'react-native-reanimated';





describe('tests for weekCategoryList', () => {

    test('that the component renders', () => {
        let testWeekList: Category[] = [];
        let testActiveList: Category[] = [];
        let testFunction = jest.fn();
        let wrapper = shallow(
            <WeekCategoryList weekId={0} weekCategoriesAsCategory={testWeekList} addCategory={testFunction} activeCategories={testActiveList} />
        )
        expect(wrapper.length).toEqual(1);
    })



    test('that a certain text is displayed if there are no categories for the week', () => {
        let testWeekList: Category[] = [];
        let testActiveList: Category[] = [];
        let testFunction = jest.fn();
        let wrapper = shallow(
            <WeekCategoryList weekId={0} weekCategoriesAsCategory={testWeekList} addCategory={testFunction} activeCategories={testActiveList} />
        )
        const noCatsText = wrapper.findWhere((node) => {
            return node.prop('testID') === 'noCats'
        });
        expect(noCatsText).toExist();
        expect(noCatsText.dive().text()).toBe('No Categories For This Week');
    });

    test('that categories are displayed if there are categories for the week', () => {
        let testWeekList: Category[] = [{categoryid:1,skill:'Test1',active:true},{categoryid:2,skill:'Test2',active:true},{categoryid:3,skill:'Test3',active:true},{categoryid:4,skill:'Test4',active:true},{categoryid:5,skill:'Test5',active:true}];
        let testActiveList: Category[] = [];
        let testFunction = jest.fn();
        let wrapper = shallow(
            <WeekCategoryList weekId={0} weekCategoriesAsCategory={testWeekList} addCategory={testFunction} activeCategories={testActiveList} />
        )
        const list = wrapper.findWhere((node) => {
            return node.prop('testID') === 'listOfWeekCats'
        });
        
        expect(list).toExist();
        expect(list.props().data).toBe(testWeekList); 

    });

    test('that menu displays categories when there are categories', ()=>{
        let testWeekList: Category[] = [];
        let testActiveList: Category[] = [{categoryid:1,skill:'Test1',active:true},{categoryid:2,skill:'Test2',active:true},{categoryid:3,skill:'Test3',active:true},{categoryid:4,skill:'Test4',active:true},{categoryid:5,skill:'Test5',active:true}];
        let testFunction = jest.fn();
        let wrapper = shallow(
            <WeekCategoryList weekId={0} weekCategoriesAsCategory={testWeekList} addCategory={testFunction} activeCategories={testActiveList} />
        )
        const list = wrapper.findWhere((node) => {
            return node.prop('testID') === 'listOfActiveCats'
        });
        
        expect(list).toExist();
        expect(list.props().data).toBe(testActiveList); 
    })

    test('that menu displays message when there are no categories', ()=>{
        let testWeekList: Category[] = [];
        let testActiveList: Category[] = [];
        let testFunction = jest.fn();
        let wrapper = shallow(
            <WeekCategoryList weekId={0} weekCategoriesAsCategory={testWeekList} addCategory={testFunction} activeCategories={testActiveList} />
        )
        const testText = wrapper.findWhere((node) => {
            return node.prop('testID') === 'noActiveCats'
        });
        
        expect(testText).toExist();
        expect(testText.dive().text()).toBe('No Active Categories'); 
    })



});