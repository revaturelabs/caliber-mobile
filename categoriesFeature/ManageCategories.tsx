import { RouteProp } from '@react-navigation/native';
import ToastNotification from 'react-native-toast-notification';
import React, { useEffect, useState } from 'react';
import { TouchableOpacity, View, Text, StyleSheet, Modal, TextInput, Alert } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { CategoryTable } from './CategoryTable';
import categoryService from './CategoryService';
import { getCategories } from '../store/categoriesFeature/CategoryActions';
import { StackParam } from './router/Router';
import { CategoryState } from '../store/store';
import { Category } from './Category';
import catStyle from '../categoriesFeature/categoriesStyles'

interface Props {
    route: RouteProp<StackParam, 'ManageCategories'>;
}

/**
 *  This component encloses the entire Manage Categories feature
 *  @returns: view that has tabs of active/stale categories 
 *  and a button that adds a category
 */
export default function ManageCategories() {
    const Tab = createMaterialTopTabNavigator();
    // set local state for currently viewed tab
    const [clicked, setClicked] = useState(false);
    const [value, onChangeText] = React.useState('');

    // useEffect(() => {

    // }, [clicked]);

    return (
        <View>
            {/* Tabs that navigate between active and stale categories */}
            <View>
                <Tab.Navigator>
                    <Tab.Screen
                        name="Active"
                        children={() => <CategoryTable status={true} />}
                    />
                    <Tab.Screen
                        name="Inactive"
                        children={() => <CategoryTable status={false} />}
                    />
                </Tab.Navigator>
            </View>

            {/* Button for adding a new category */}
            <View style={{flex: 1, justifyContent: 'flex-end'}}>
                <TouchableOpacity style={catStyle.addBtn} onPress={() => setClicked(true)} accessibilityLabel='Add Category'>
                    <Text style={catStyle.plusSign}>+</Text>
                </TouchableOpacity>
            </View>
            {clicked == true && (
                <Modal
                    animationType="slide"
                    // this happens when a user presses the hardware back TouchableOpacity
                    onRequestClose={() => {
                        // tiny toast
                        <ToastNotification
                            text='Closed without saving.'
                            duration={3000}
                        />
                    }}
                >
                    <View>
                        {/* Title for modal */}
                        <Text>{'Add Category'}</Text>

                        {/* Allow user to enter a new category name */}
                        <TextInput
                            onChangeText={text => onChangeText(text)}
                            value={value}
                            autoCapitalize='words'
                            autoFocus={true}
                        />

                        {/* Button that adds a category */}
                        <TouchableOpacity onPress={(value) => {
                            AddCategory(value.toString());
                            setClicked(false);
                        }}>
                            <Text>Add Category</Text>
                        </TouchableOpacity>

                        {/* Button that closes modal */}
                        <TouchableOpacity onPress={() => { setClicked(false) }}>
                            <Text>Close</Text>
                        </TouchableOpacity>
                    </View>
                </Modal>
            )}
        </View>
    )
}

/**
 *  This component opens a modal when 'Add Category' or 'Edit Category' TouchableOpacity is clicked
 *  @param: modalAction prop that states the action being taken
 *  @param: category prop that takes in an optional category - utilized for the editCategory function
 *  @returns: view that has a modal where user can add or edit a category
 */

export interface modalProps {
    action: string,
    category?: Category
}

// gets called from the modal to add the category
function AddCategory(value: string) {
    // create local state
    // get category state from store
    const categorySelector = (state: CategoryState) => state.categories;
    const categories = useSelector(categorySelector);
    const dispatch = useDispatch();

    // calls categoryService.addCategory
    categoryService.addCategory(value).then((result) => {
        // add new category to current categories
        categories.push(result);

        // dispatch new categories
        dispatch(getCategories(categories));

        // tiny toast for success
        return (
            <ToastNotification
                text='Category added!'
                duration={3000}
            />
        )

    }).catch(error => {
        // tiny toast for failure
        return (
            <ToastNotification
                text='Failed to add category'
                duration={3000}
            />
        )
    });
}