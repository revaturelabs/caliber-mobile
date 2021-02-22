import React from 'react';
import { View, Text, Pressable } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import Stylesheet from 'react-native';
import { getCategories } from '../store/categoriesFeature/CategoryActions';
import { Category } from './Category';
import categoryService from './CategoryService';
import {openModal} from './ManageCategories';

interface CategoryNameProp {
    category: Category;
    categories: Category[];
}

/**
 *  This component displays a category name that can be pressed to toggle the category's status
 *  @param: category - the specific category we are displaying
 *  @param: categories - entire category state that will also need to update with new category
 *  @returns: view with a pressable category name
 */
export function CategoryName({ category, categories }: CategoryNameProp) {
    return (
        <View>
            {/* has a list of category names (depends on props) */}
            <Pressable onPress={()=> {changeStatus(category, categories)}}>
                <Text>{category.skill}</Text>
            </Pressable>
            <Pressable onPress={()=> openModal('Edit Category')}>
                <Text>Edit Category</Text>
            </Pressable>
        </View>
    )
}

/**
 *  This function is called when a category is pressed and changes the status of the category
 *  @param: category - the specific category whose status is changing
 *  @param: categories - entire category state that will also need to update with new category
 */
export function changeStatus(category: Category, categories: Category[]) {
    const dispatch = useDispatch();
    
    // change category status
    if (category.active) {
        category.active = false;
    } else {
        category.active = true;
    }

    // find category in categories array and replace with new category
    categories.splice(categories.indexOf(category), 1, category);

    // calls categoryService.updateCategory with the category id
    categoryService.updateCategory(category).then(() => {
        dispatch(getCategories(categories));
    }); 

}