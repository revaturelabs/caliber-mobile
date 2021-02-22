import { RouteProp } from '@react-navigation/native';
import ToastNotification from 'react-native-toast-notification';
import React, { useState } from 'react';
import { Button, View, Text, StyleSheet, Modal, TextInput, Alert } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { CategoryTable } from './CategoryTable';
import categoryService from './CategoryService';
import { getCategories } from '../store/categoriesFeature/CategoryActions';
import { StackParam } from './router/Router';
import { CategoryState } from '../store/store';
import { Category } from './Category';

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
    const [status, setStatus] = useState(true);

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
                        children={() => <CategoryTable status={false}/>}
                    />
                </Tab.Navigator>
            </View>
            
            {/* Button for adding a new category */}
            <View>
                <Button title="Add Category" onPress={()=>openModal('Add Category')} accessibilityLabel='Add Category' />
            </View>
        </View>
    )
}

/**
 *  This component opens a modal when 'Add Category' button is clicked
 *  @returns: view that has a modal where user can add a category
 */
export function openModal(modalAction: string, category?: Category) {
    const[value, onChangeText] = React.useState('');
    const [modalVisible, setModalVisible] = useState(true);

    return (
        <View>
            <Modal
                animationType="slide"
                visible={modalVisible}
                // this happens when a user presses the hardware back button
                onRequestClose={() => {
                    // tiny toast
                    <ToastNotification
                        text='Closed without saving.'
                        duration={3000}
                    />
                    setModalVisible(!modalVisible);
                }}
            >
                <View>
                    {/* Title for modal */}
                    <Text>{modalAction}</Text>

                    {/* Allow user to enter a new category name */}
                    <TextInput
                        onChangeText={text => onChangeText(text)}
                        value={value}
                        autoCapitalize='words'
                        autoFocus={true}
                    />
                    
                    {/* Button that adds a category */}
                    {category ? (
                        <Button title={modalAction} onPress={(value) => editCategory(value.toString(), category)}></Button>
                        )
                    : (
                        <Button title={modalAction} onPress={(value) => addCategory(value.toString())}></Button>
                    )}
                    
                    {/* Button that closes modal */}
                    <Button title='Close' onPress={() => {setModalVisible(!modalVisible)}}></Button>
                </View>
            </Modal>
        </View>
    )
}

// gets called from the modal to add the category
export function addCategory(value: string) {
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

export function editCategory(value: string, category: Category){
    // get category state from store
    const categorySelector = (state: CategoryState) => state.categories;
    const categories = useSelector(categorySelector);
    const dispatch = useDispatch();

    //update skill name
    category.skill = value;

    // calls categoryService.addCategory
    categoryService.updateCategory(category).then((result) => {
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