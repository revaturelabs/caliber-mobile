/**
 * @jest-environment jsdom
 */
import Enzyme from 'enzyme';
import React from 'react';
import 'react-native';
import 'jest-enzyme';
import '@testing-library/jest-dom';
import { CategoryTable } from '../categoryName';

const mockedNav = jest.fn();


jest.mock('@react-navigation/core', () => {
    return {
        useNavigation: ()=> ({navigate: mockedNav})
    }
});

let wrapper: any;
describe('CategoryTable component', () => {
    beforeAll(() => {
        wrapper = Enzyme.mount(
            <CategoryTable status={status}></CategoryTable>
        )
    });
    test('that it has toggle instructions', () => {
        const toggleInstructions = wrapper.findWhere((node: any) => node.prop('testID') === 'toggleInstructions');
        expect(toggleInstructions.length).toBe(1);
    });

    test('that it has a list of category names', () => {
        const categoryNameList = wrapper.findWhere((node: any) => node.prop('testID') === 'categoryNameList');
        expect(categoryNameList.length).toBe(1);
    });
});

describe('changeStatus function', () => {
    test('that it calls categoryService.updateCategory with the category id', () => {
        const serviceUpdateCategory = jest.fn().mockImplementation((id) => {});
        const id = 1;
        expect(serviceUpdateCategory).toBeCalledTimes(1);
        expect(serviceUpdateCategory).toBeCalledWith(id);
    });

    test('that it re-renders to have the updated categories', () => {
        const isActive = true;
        expect(mockedNav).toBeCalledTimes(1);
        expect(mockedNav).toBeCalledWith('CategoryTable', isActive);
    });
});