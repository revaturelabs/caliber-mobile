import { RouteProp } from '@react-navigation/native';
import React, { useEffect } from 'react';
import { Button, View, Text } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import categoryService from './categoryService';
import { CategoryName } from './categoryName';
import { StackParam } from './router/categoryRouter';
import { Category } from './category';
import { CategoryState } from '../store/store';

interface Props {
    route: RouteProp<StackParam, 'ManageCategories'>;
}

// one main component to include everything
export default function ManageCategories() {
    // need category state from the store
    const categorySelector = (state: CategoryState) => state.categories;
    const categories = useSelector(categorySelector);
    const newCategories = {...categories};
    // statusValue: string | 'true';
    //const [status, setStatus] = useState(statusValue);
    let status: string;
    const dispatch = useDispatch();
    //const nav = useNavigation();
    
    // has an Add Assessment Category button that calls openModal()

    // tabs for active and inactive tables

    // each tab takes in status prop
    return(
        <View>
            <Button title="Active" onPress={() => {switchTab('active', status)}} accessibilityLabel='Active'/>
            <Button title="Inactive" onPress={() => {switchTab('inactive', status)}} accessibilityLabel='Inactive'/>
            <Button title="Add Category" onPress={openModal} accessibilityLabel='Add Category'/>
            {/* Toggle instruction text */}
            <Text>Click to toggle Active/Stale Categories</Text>
            {/*  */}
            {categories.map((req: Category, index: number) => (
                <CategoryName
                    key={'req-'+ index}
                    category={req}
                    categories={newCategories}
                ></CategoryName>
            ))}
        </View>
    )
}

//export default ManageCategories;

// when 'Add Category' button is clicked, open modal
export function openModal() {
    // has a textInput for category name

    // has a button that calls addCategory()

    // creates an alert for sucessfully creating a category
    
    // has a button that closes the modal
    return(
        <></>
    )
}

// gets called from the modal to add the category
export function addCategory() {
    // calls categoryService.addCategory
    
    // update the state to include the new category

    // adds category to corresponding table
    return(
        <></>
    )
}

export function switchTab(activeTab: string, status: string) {
    //checks the state for status and switches to the opposite if activeTab does not match
    //if active => inactive, if inactive => active
    //getCategories by the new status dispatch THAT to the state
}






























































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































