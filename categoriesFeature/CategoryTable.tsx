import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { getCategories } from '../store/categoriesFeature/CategoryActions';
import { CategoryState } from '../store/store';
import { Category } from './Category';
import { CategoryName } from './CategoryName';
import categoryService from './CategoryService';
import { FlatList } from 'react-native-gesture-handler';
import { SearchBar } from 'react-native-elements';
import SearchInput, {createFilter} from 'react-native-search-filter';

interface CategoryTableProp {
    status: boolean;
}

/**
 *  This component
 *  @param: status - local state that allows table to show categories conditionally
 *  @returns: view that has a table of either active or stale categories
 */
export function CategoryTable({ status }: CategoryTableProp) {
    // get category state from store
    const categorySelector = (state: CategoryState) => state.categories;
    const categories = useSelector(categorySelector);
    const newCategories = { ...categories };
    const dispatch = useDispatch();
    let [search, searchSet] = useState('');

    // temporary mock data
    const mockCategories = [
        {
            categoryid: 1,
            skill: 'SQL',
            active: true
        },
        {
            categoryid: 2,
            skill: 'ReactNative',
            active: false
        },
        {
            categoryid: 3,
            skill: 'Redux',
            active: true
        },
        {
            categoryid: 4,
            skill: 'Microservices',
            active: false
        }
    ];

    let [localCat, setCat] = useState(mockCategories);

    // after every render, check if there is a change in categories
    useEffect(() => {
        categoryService.getCategories(status.toString()).then((results) => {
            dispatch(getCategories(results));
        })
    }, [dispatch])

    // function checkFilter() {
    //     mockCategories.forEach((category) => {
    //         if (category.skill.includes(search)) {
    //             console.log(search);
    //             return true;
    //         } else {
    //             return false;
    //         }
    //     })
    //     return false;
    // }

    const updateSearch = (search: string) => {
        searchSet(search);
    }

    function handleChange(input: string) {
        let currentList = [];
        let newList = [];
        if (input !== "") {
            currentList = mockCategories;
            newList = currentList.filter(category => {
                const skill = category.skill.toLowerCase();
                const filter = input.toLowerCase();
                return skill.includes(filter);
            })
        } else {
            newList = mockCategories;
        }
        
        // need to set state to contain the filtered categories
        setCat(newList);
    }
    
    const KEYS_TO_FILTERS = ['skill'];
    const filteredData = mockCategories.filter(createFilter(search, KEYS_TO_FILTERS));
    const sortedData = filteredData.sort(function (a, b) {
        return a.skill > b.skill ? 1 : -1;
    });

    return (
        <>
            {status == true ?
                // if status is true, return a table of active categories
                <View>
                    {/* Table header */}
                    <Text style={styles.textColor}>Active Categories</Text>

                    {/* Toggle instructions */}
                    <Text style={styles.textColor}>Click to toggle Active/Stale Categories</Text>

                    {/* Table items */}
                    {/* <SearchBar
                        placeholder="Type Here..."
                        onChangeText={(search) => {handleChange(search)}}
                        value={search}
                    /> */}
                    <SearchInput
                        placeholder="Enter Skill..."
                        onChangeText={(value) => {
                            searchSet(value);
                        }}
                        value={search}
                    />
                    {sortedData.map((req: Category, index: number) => (
                        <CategoryName
                            key={'req-' + index}
                            category={req}
                            categories={newCategories}
                        ></CategoryName>
                    ))}
                    {/* <FlatList 
                        data={sortedData}
                        renderItem={({item}) => ((<CategoryName categories={mockCategories} category={item}></CategoryName>))}
                        keyExtractor={(item) => item.categoryid.toString()}
                    /> */}

                </View>
                :
                // if status is false, return a table of stale categories
                <View>
                    {/* Table header */}
                    <Text style={styles.textColor}>Stale Categories</Text>

                    {/* Toggle instructions */}
                    <Text style={styles.textColor}>Click to toggle Active/Stale Categories</Text>

                    {/* Table items */}
                    <SearchBar
                        placeholder="Enter Skill..."
                        onChangeText={(value) => {
                            searchSet(value);
                        }}
                        value={search}
                    />
                    {/* {sortedData.map((req: Category, index: number) => (
                        <CategoryName
                            key={'req-' + index}
                            category={req}
                            categories={newCategories}
                        ></CategoryName>
                    ))} */}
                    <FlatList
                        data={mockCategories}
                        keyExtractor={item => item.categoryid.toString()}
                        renderItem={({ item }) => (
                            <CategoryName category={item} categories={mockCategories}></CategoryName>
                        )}
                    />
                </View>
            }
        </>
    )
}



const styles = StyleSheet.create({
    textColor: {
        color: 'black',
    }
}
)
