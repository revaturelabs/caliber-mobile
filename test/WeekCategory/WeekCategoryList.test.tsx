import 'react-native';
import 'jest-enzyme';
import '@testing-library/jest-dom';
import Enzyme from 'enzyme';
import React from 'react';
import {weekCategory} from '../../weekCategories/WeekCategory'
import { CategoryTable } from '../../categories/categoryTable';
import weekCategoryService from '../../WeekCategories/WeekCategoryService';
import { FlatList } from 'react-native';
import { useSelector } from 'react-redux';
import WeekCategoryList from '../../weekCategories/WeekCategoryList';
import configureStore from 'redux-mock-store';
import {Provider} from 'react-redux';
import categoryService from '../../categories/categoryService';
import {addWeekCategory, getWeekCategories} from '../../store/actions'
import { Category } from '../../categoriesFeature/Category';
import { getCategories } from '../../store/categoriesFeature/CategoryActions';


const mockStore = configureStore([]);


describe('tests for weekCategoryList', () => {
    let store: any;


    test('that we retrive a list of all catergores from the given week from the db and we update the store', ()=>{
        store = mockStore({
            weekCategories:[],
            categories:[]
        });
        store.dispatch = jest.fn();
        weekCategoryService.getCategory = jest.fn().mockReturnValue([{categoryId:1, qcWeekId:0}, {categoryId:2, qcWeekId:0}]);
        categoryService.getCategories = jest.fn().mockReturnValue([{ categoryid: 0, skill: 'React', active: true }, { categoryid: 1, skill: 'TypeScript', active: true },{ categoryid: 2, skill: 'Redux', active: true } ])
        let weekId = 0;
        let thisWeekCats: Category[] = [{ categoryid: 1, skill: 'TypeScript', active: true },{ categoryid: 2, skill: 'Redux', active: true }]
        const wrapper = Enzyme.mount(
            <Provider store ={store}>
            <WeekCategoryList weekId={weekId}></WeekCategoryList>
            </Provider>
         );
         expect(weekCategoryService.getCategory).toBeCalled();
         expect(weekCategoryService.getCategory).toBeCalledWith(weekId);
         expect(categoryService.getCategories).toBeCalled();
         expect(store.dispatch).toHaveBeenCalled();
         expect(store.dispatch).toHaveBeenCalledWith(getWeekCategories(thisWeekCats));
    });

    test('that we create a list of active categories that are not in weekCategories and update store', ()=>{
        store = mockStore({
            weekCategories:[],
            categories:[]
        });
        store.dispatch = jest.fn();
        weekCategoryService.getCategory = jest.fn().mockReturnValue([{categoryId:1, qcWeekId:0}, {categoryId:2, qcWeekId:0}]);
        categoryService.getCategories = jest.fn().mockReturnValue([{ categoryid: 0, skill: 'React', active: true }, { categoryid: 1, skill: 'TypeScript', active: true },{ categoryid: 2, skill: 'Redux', active: true } ])
        let weekId = 0;
        let availabeCats: Category[] = [{ categoryid: 1, skill: 'TypeScript', active: true },{ categoryid: 2, skill: 'Redux', active: true }]
        const wrapper = Enzyme.mount(
            <Provider store ={store}>
            <WeekCategoryList weekId={weekId}></WeekCategoryList>
            </Provider>
         );
         expect(categoryService.getCategories).toBeCalled();
         expect(categoryService.getCategories).toHaveBeenCalledWith('true');
         expect(store.dispatch).toHaveBeenCalled();
         expect(store.dispatch).toHaveBeenCalledWith(getCategories({ categoryid: 0, skill: 'React', active: true }));
    });

    test('that nothing is displayed if there are no categories for the week', () => {
        store = mockStore({
            weekCategories:[],
            categories:[]
        });
        store.dispatch = jest.fn();
        weekCategoryService.getCategory = jest.fn().mockReturnValue([]);
        categoryService.getCategories = jest.fn().mockReturnValue([{ categoryid: 0, skill: 'React', active: true }, { categoryid: 1, skill: 'TypeScript', active: true },{ categoryid: 2, skill: 'Redux', active: true } ])
        let testList:any = [];
        let weekId=0;
        const wrapper = Enzyme.mount(
            <Provider store ={store}>
            <WeekCategoryList weekId={weekId}></WeekCategoryList>
            </Provider>
         );
         const flatList = wrapper.find(FlatList).first();
         expect (flatList.props().data).toEqual(testList);

    });

    test('that categories display correctly if there are categories for the week', () => {
        store = mockStore({
            weekCategories:[],
            categories:[]
        });
        store.dispatch = jest.fn();
        weekCategoryService.getCategory = jest.fn().mockReturnValue([{categoryId:1, qcWeekId:0}, {categoryId:2, qcWeekId:0}]);
        categoryService.getCategories = jest.fn().mockReturnValue([{ categoryid: 0, skill: 'React', active: true }, { categoryid: 1, skill: 'TypeScript', active: true },{ categoryid: 2, skill: 'Redux', active: true } ])
        let weekId=0;
        let testList = [{ categoryid: 1, skill: 'TypeScript', active: true },{ categoryid: 2, skill: 'Redux', active: true }];
        const wrapper = Enzyme.mount(
            <WeekCategoryList weekId={weekId}></WeekCategoryList>
        );
        const flatList = wrapper.find(FlatList).first();
         expect (flatList.props().data).toEqual(testList);

    });

});