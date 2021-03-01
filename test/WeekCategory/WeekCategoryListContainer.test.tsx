

import WeekCategoryListContainer from '../../weekCategories/WeekCategoryListContainer';
import configureMockStore from 'redux-mock-store'
import { mount, render, shallow } from 'enzyme';
import * as redux from "react-redux";
import WeekCategoryService from '../../weekCategories/WeekCategoryService';
import React from 'react';
import CategoryService from '../../categoriesFeature/CategoryService';
import { WeekCategoryList } from '../../weekCategories/WeekCategoryList';

const mockStore = configureMockStore();
const initialState={
    WeekCategoryReducer:{
        weekCategories:[],
        weekCategory:[],
    },
    categoryReducer:{
        categories:[]
    }
}
let store:any;


describe('Tests for WeekCategoryListContianer.tsx',()=>{
    beforeEach(()=>{
        store = mockStore(initialState);
    })

    test('That weekCategories in state is changed',()=>{
        
        
        WeekCategoryService.getCategory = jest.fn().mockReturnValue([{ categoryid: 1, skill: 'Test1', active: true }, { categoryid: 2, skill: 'Test2', active: true }])
        CategoryService.getCategories = jest.fn().mockReturnValue([{ categoryid: 1, skill: 'Test1', active: true }, { categoryid: 2, skill: 'Test2', active: true }, { categoryid: 3, skill: 'Test3', active: true }])
        const wrapper = shallow(
            <redux.Provider store={store}>
                <WeekCategoryListContainer weekId={0}></WeekCategoryListContainer>
            </redux.Provider>
        );
        const component = wrapper.dive();
        console.log(component.simulate)
        

    })

})
