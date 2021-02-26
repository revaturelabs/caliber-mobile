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
    const [textValue, onChangeText] = React.useState('');
    const [toastStatus, setToastStatus] = useState('');

    // get category state from store
    const categorySelector = (state: CategoryState) => state.categories;
    const categories = useSelector(categorySelector);
    const dispatch = useDispatch();

    return (
        <React.Fragment>
            <React.Fragment>
                {toastStatus === 'success' ? <ToastNotification
                    text='Category updated!'
                    duration={3000}
                />
                    : <></>}
                {toastStatus === 'failure' ? <ToastNotification
                    text='Failed to update category'
                    duration={3000}
                />
                    : <></>}
            </React.Fragment>
            {/* Tabs that navigate between active and stale categories */}
            <Tab.Navigator
                tabBarOptions={{
                    labelStyle: { fontSize: 14 },
                    activeTintColor:'#F26925',
                    inactiveTintColor:'#474C55',
                    style: { backgroundColor: '#FFFFFF' },
                    indicatorStyle: {backgroundColor: '#72A4C2', height: 5, borderRadius:5},
                    
                }}
            >
                {/* Active Categories Table */}
                <Tab.Screen
                    name="Active"
                    children={() => <CategoryTable status={true} />}
                />
                {/* Stale Categories Table */}
                <Tab.Screen
                    name="Inactive"
                    children={() => <CategoryTable status={false} />}
                />
            </Tab.Navigator>
            <TouchableOpacity style={catStyle.addBtn} 
                onPress={() => setClicked(true)} 
                accessibilityLabel='Add Category'>
                <Text style={catStyle.plusSign}>+</Text>
            </TouchableOpacity>

            {/* If clicked is true, open the modal */}
            {clicked == true && (
                <Modal
                    animationType='slide'
                    // this happens when a user presses the hardware back TouchableOpacity
                    onRequestClose={() => {
                        // tiny toast
                        <ToastNotification
                            text='Closed without saving.'
                            duration={3000}
                        />
                    }}
                    transparent
                >
                    <View style={catStyle.modal}>
                        {/* Title for modal */}
                        <Text style={catStyle.title}>{'Add Category'}</Text>

                        {/* Allow user to enter a new category name */}
                        <TextInput
                            style={catStyle.modalTextInput}
                            onChangeText={text => onChangeText(text)}
                            value={textValue}
                            autoCapitalize='words'
                            autoFocus={true}
                            placeholder='Enter Category...'
                            placeholderTextColor='#474C55'
                        />

                        {/* Button that adds a category */}
                        <TouchableOpacity 
                            style={catStyle.modalActionBtn}
                            onPress={() => {
                                AddCategory(textValue);
                                setClicked(false);
                            }}
                        >
                            <Text style={catStyle.btnText}>Add Category</Text>
                        </TouchableOpacity>

                        {/* Button that closes modal */}
                        <TouchableOpacity 
                            style={catStyle.closeBtn}
                            onPress={() => { setClicked(false) }}>
                            <Text style={catStyle.btnText}>Close</Text>
                        </TouchableOpacity>
                    </View>
                </Modal>
            )}
        </React.Fragment>
    )

    /**
     *  This component opens a modal when 'Add Category' TouchableOpacity is clicked
     *  @param: value is a string that is what the user inputs for a new category
     */
    function AddCategory(value: string) {
        // calls categoryService.addCategory
        categoryService.addCategory(value).then((result) => {
            // add new category to current categories
            categories.push(result);

            // dispatch new categories
            dispatch(getCategories(categories));

            // call toast function with result
            setToastStatus('success');

        }).catch(error => {
            // call toast function with result
            setToastStatus('failure');
        });
    }
}