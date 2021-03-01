/**
 * @jest-environment jsdom
 */

import 'react-native';
import 'jest-enzyme';
import '@testing-library/jest-dom';
import Enzyme, { mount, shallow } from 'enzyme';
import React from 'react';
import { FlatList } from 'react-native';
import WeekCategoryList from '../../weekCategories/WeekCategoryList';
import categoryService from '../../categoriesFeature/CategoryService';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import weekCategoryService from '../../weekCategories/WeekCategoryService';
import { getWeekCategories } from '../../store/actions';



const mockGetWeekCat = jest.spyOn(weekCategoryService, 'getCategory');
const mockGetCat = jest.spyOn(categoryService,'getCategories');


describe('tests for weekCategoryList', () => {
    const initialState = {
            WeekCategoryReducer: {
                weekCategories: [],
                categories: []
            },
            categoryReducer: {
                categories: []
            }

        }
    const mockStore = configureStore();
    let store:any ,wrapper:any;

    beforeEach(()=>{
        store = mockStore(initialState);
        const wrapper = mount(
            <Provider store={store}>
                <WeekCategoryList weekId={0}></WeekCategoryList>
            </Provider>
        );
    })
    

    test('that nothing is displayed if there are no categories for the week', () => {
        const categories = [{ categoryid: 0, skill: 'React', active: true }, { categoryid: 1, skill: 'TypeScript', active: true }, { categoryid: 2, skill: 'Redux', active: true }];
        let testList: any = [];
        mockGetWeekCat.mockResolvedValue(testList);
        mockGetCat.mockResolvedValue(categories);        
        const flatList = wrapper.find(FlatList).first();
        expect(flatList.props().data).toEqual(testList);
    });

    test('that categories are displayed if there are categories for the week', () => {
        let testList: any = [{ categoryid: 5, skill: 'Fun', active: true }];
        const categories = [{ categoryid: 0, skill: 'React', active: true }, { categoryid: 1, skill: 'TypeScript', active: true }, { categoryid: 2, skill: 'Redux', active: true }]
        mockGetWeekCat.mockResolvedValue(testList);
        mockGetCat.mockResolvedValue(categories);
        const flatList = wrapper.find(FlatList).first();
        console.log(flatList.props().data)
        expect(flatList.props().data).toEqual(testList);

    });



});