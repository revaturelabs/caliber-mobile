import React, { useEffect } from 'react';
import { View, Text, Pressable } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { Category } from './Category';
import categoryService from './CategoryService';
import Stylesheet from 'react-native';
import { CategoryState } from '../store/store';
import { getCategories } from '../store/categoriesFeature/CategoryActions';

interface CategoryNameProp {
    category: Category;
    categories: Category[];
}

/**
 *  This component creates a category name that can be pressed to toggle the category's status
 *  @params: category
 *  @returns: view with a pressable category name
 */
export function CategoryName({ category, categories }: CategoryNameProp) {
    return (
        <View>
            {/* has a list of category names (depends on props) */}
            <Pressable onPress={()=> {changeStatus(category, categories)}}>
                <Text>{category.skill}</Text>
            </Pressable>
        </View>
    )
}

/**
 *  This function is called when a category is pressed and changes the status of the category
 */
export function changeStatus(category: Category, categories: Category[]) {
    const dispatch = useDispatch();
    // change category status
    if (category.active) {
        category.active = false;
    } else {
        category.active = true;
    }

    // find category in categories array and replace
    categories.splice(categories.indexOf(category), 1, category);

    // calls categoryService.updateCategory with the category id
    categoryService.updateCategory(category.categoryId).then(() => {
        dispatch(getCategories(categories));
    }); 

} 