import { RouteProp } from '@react-navigation/native';
import React, { useEffect } from 'react';
import { Button, View } from 'react-native';
import { useDispatch } from 'react-redux';
import categoryService from './categoryService';
import { StackParam } from './router/categoryRouter';

interface Props {
    route: RouteProp<StackParam, 'ManageCategories'>;
}

// one main component to include everything
export default function ManageCategories() {
    // need category state from the store
    // const categorySelector = (state: CategoryState) => state.category;
    // const categories = useSelector(categorySelector);
    // statusValue: string | 'true';
    //const [status, setStatus] = useState(statusValue);

    const dispatch = useDispatch();
    //const nav = useNavigation();
    
    // has an Add Assessment Category button that calls openModal()

    // tabs for active and inactive tables

    // each tab takes in status prop
    return(
        <View>
            <Button title="Active" onPress={() => {switchTab('active')}}></Button>
            <Button title="Inactive" onPress={() => {switchTab('inactive')}}></Button>
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

export function switchTab(activeStat: string) {
    //checks the state for status and switches to the opposite if activeStat does not match
    //if active => inactive, if inactive => active
    //getCategories by the new status dispatch THAT to the state
    //refresh the page
}


