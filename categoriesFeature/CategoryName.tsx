import React, { useState } from 'react';
import { View, Text, Pressable, TouchableOpacity, Modal, TextInput } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import ToastNotification from 'react-native-toast-notification';
import catStyle from './categoriesStyles';
import { getCategories } from '../store/categoriesFeature/CategoryActions';
import { Category } from './Category';
import categoryService from './CategoryService';
import { CategoryState } from '../store/store';

interface CategoryNameProp {
    skill: string;
    categoryid: number;
    active: boolean;
    categories: Category[];
}

/**
 *  This component displays a category name that can be pressed to toggle the category's status
 *  @param: category - the specific category we are displaying
 *  @param: categories - entire category state that will also need to update with new category
 *  @returns: view with a pressable category name
 */
export function CategoryName({ skill, categoryid, active, categories }: CategoryNameProp) {
    const [clicked, setClicked] = useState(false);
    const [value, onChangeText] = React.useState('');
    const category = new Category();
    category.skill = skill;
    category.categoryid = categoryid;
    category.active = active;
    // get category state from store

    return (
        <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between' }}>
            {/* has a list of category names (depends on props) */}
            <Pressable onPress={() => { changeStatus(category, categories) }}>
                <Text style={catStyle.text}>{category.skill}</Text>
            </Pressable>
            <View>
                <TouchableOpacity style= {catStyle.blueBtn} onPress={() => setClicked(true)} accessibilityLabel='Edit Category'>
                    <Text style={catStyle.btnText}>Edit</Text>
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
                        setClicked(false);
                    }}
                >
                    <View>
                        {/* Title for modal */}
                        <Text>Edit Category</Text>

                        {/* Allow user to enter a new category name */}
                        <TextInput
                            onChangeText={text => onChangeText(text)}
                            value={value}
                            autoCapitalize='words'
                            autoFocus={true}
                        />

                        {/* Button that edits a category */}
                        <TouchableOpacity onPress={(value) => {
                            EditCategory(value.toString(), category);
                            setClicked(false);
                        }}>
                            <Text>Edit Category</Text>
                        </TouchableOpacity>

                        {/* Button that closes modal */}
                        <TouchableOpacity onPress={() => {
                            setClicked(false);
                        }}>
                            <Text>Close</Text>
                        </TouchableOpacity>
                    </View>
                </Modal>
            )}
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

function EditCategory(value: string, category: Category) {
    const categorySelector = (state: CategoryState) => state.categories;
    const categories = useSelector(categorySelector);
    const dispatch = useDispatch();
    // update skill name
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
                text='Category updated!'
                duration={3000}
            />
        )

    }).catch(error => {
        // tiny toast for failure
        return (
            <ToastNotification
                text='Failed to update category'
                duration={3000}
            />
        )
    });
}