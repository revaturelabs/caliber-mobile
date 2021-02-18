import { RouteProp } from '@react-navigation/native';
import React, { useEffect, useState} from 'react';
import { Button, View, Text, StyleSheet } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import categoryService from './CategoryService';
import { CategoryName } from './CategoryName';
import { StackParam } from './router/Router';
//import { Category } from './category';
import { CategoryState } from '../store/store';
import { getCategories } from '../store/categories/CategoryActions';
import { Category } from './Category';

interface Props {
    route: RouteProp<StackParam, 'ManageCategories'>;
}

// one main component to include everything
export default function ManageCategories() {
    // need category state from the store
    const categorySelector = (state: CategoryState) => state.categories;
    const categories = useSelector(categorySelector);
    const newCategories = {...categories};

    //mock data
    const mockCategories = [
        {
            categoryId: 1,
            skill: 'SQL',
            active: true
        }, 
        {
            categoryId: 2,
            skill: 'React',
            active: false
        }, 
        {
            categoryId: 3,
            skill: 'Redux',
            active: true        
        }, 
        {
            categoryId: 4,
            skill: 'Microservices',
            active: false  
        }
    ];

     // set local state: start with viewing active tab
    const [status, setStatus] = useState(true);
    
    const dispatch = useDispatch();

    //const nav = useNavigation();
    
    // after every render, check if there is a change in categories
    useEffect(() => {
        categoryService.getCategories(status.toString()).then((results) => {
            dispatch(getCategories(results));
        })
    },[dispatch])

    return(
        <View>
            <View>
                <Button title="Add Category" onPress={openModal} accessibilityLabel='Add Category'/>
            </View>

            {/* tab navigator */}
            <View>
                {/* <Button title="Active" onPress={() => {switchTab('active', status)}} accessibilityLabel='Active'/>
                <Button title="Inactive" onPress={() => {switchTab('inactive', status)}} accessibilityLabel='Inactive'/> */}
            </View>
            
            {/* all of this is going to go inside each tab */}
            {/* Table header */}
            <Text style={styles.textColor}>Active/Stale Categories</Text>
            {/* Toggle instructions */}
            <Text style={styles.textColor}>Click to toggle Active/Stale Categories</Text>
            {/* Table items */}
            {mockCategories.map((req: Category, index: number) => (
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

export function switchTab(activeTab: string, status: boolean) {
    //checks the state for status and switches to the opposite if activeTab does not match
    //if active => inactive, if inactive => active
    //getCategories by the new status dispatch THAT to the state
}


const styles = StyleSheet.create (
    {
        textColor: {
            color: 'black',
        },
        btnStyle: {
            color: 'blue'
        }
    }
)