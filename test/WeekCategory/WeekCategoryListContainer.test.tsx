import WeekCategoryListContainer from '../../weekCategories/WeekCategoryListContainer';
import configureMockStore from 'redux-mock-store'
import { shallow } from 'enzyme';
import * as redux from "react-redux";
import React from 'react';
import { Category } from '../../categoriesFeature/Category';




const mockStore = configureMockStore();
const initialState = {
    WeekCategoryReducer: {
        weekCategories: [],
        weekCategory: [],
    },
    categoryReducer: {
        categories: []
    }
}
let store: any;


describe('Tests for WeekCategoryListContianer.tsx', () => {
    beforeEach(() => {
        store = mockStore(initialState);
    })

    test('test', () => {
        const testCat: Category = { skill: 'test', active: true, categoryid: 0 };
        const testWeek = 0;
        const mockAddCat = jest.spyOn("../../weekCategories/WeekCategoryListContainer", 'addCategory')
        const mockCreateActiveList = jest.spyOn("../../weekCategories/WeekCategoryListContainer", 'createActiveList');
        const mockCreateCatList = jest.spyOn("../../weekCategories/WeekCategoryListContainer", 'craeteCatList');
        const wrapper = shallow(
            <redux.Provider store={store}>
                <WeekCategoryListContainer weekId={0}></WeekCategoryListContainer>
            </redux.Provider>
        )

        expect(mockAddCat).toHaveBeenCalledTimes(1)








    })



})
