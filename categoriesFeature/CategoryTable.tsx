import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, SectionList, ScrollView } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { getCategories } from '../store/categoriesFeature/CategoryActions';
import { CategoryState } from '../store/store';
import { Category } from './Category';
import CategoryName  from './CategoryName';
import categoryService from './CategoryService';
import { FlatList, TouchableOpacity } from 'react-native-gesture-handler';
import { SearchBar } from 'react-native-elements';
import SearchInput, {createFilter} from 'react-native-search-filter';
import { AlphabetList } from 'react-native-section-alphabet-list';
import catStyle from './categoriesStyles';
import CategoryService from './CategoryService';

interface CategoryTableProp {
    cats: Category[];
}

/**
 *  This component
 *  @param: status - local state that allows table to show categories conditionally
 *  @returns: view that has a table of either active or stale categories
 */
export function CategoryTable({ cats }: CategoryTableProp) {
    // get category state from store
    const categorySelector = (state: CategoryState) => state.categories;
    const categories = useSelector(categorySelector);
    const newCategories = { ...categories };
    const dispatch = useDispatch();
    let [search, searchSet] = useState('');

    // after every render, check if there is a change in categories
    useEffect(() => {
        CategoryService.getCategories()
        dispatch(getCategories(cats));
    }, [dispatch])
    
    // filters the data
    const KEYS_TO_FILTERS = ['skill'];
    const filteredData = cats.filter(createFilter(search, KEYS_TO_FILTERS));

    // destructures array into [value: 'skill, key: categoryid, active: boolean] for AlphabetList
    const result = new Array();
    for(let element in filteredData) {
        let [value, key, active] = [filteredData[element].skill, filteredData[element].categoryid, filteredData[element].active]
        result.push({value, key, active})
    }
    console.log(result);

    return (
        <View>
            {cats[0] && cats[0].active == true ?
                // if status is true, return a table of active categories
                <View>
                    <View style={catStyle.instructView}>   
                        {/* Search Bar for categories */}
                        <SearchBar
                            placeholder="Enter Skill..."
                            onChangeText={(value) => {
                                searchSet(value);
                            }}
                            value={search}
                            inputStyle={catStyle.inputBar}
                            inputContainerStyle={catStyle.inputContainer}
                            containerStyle={catStyle.searchContainer}
                            searchIcon={{color: 'white'}}
                            />
                        {/* Toggle instructions */}
                        <Text style={catStyle.instructText}>Click to toggle Active/Stale Categories</Text>
                    </View>
                    <ScrollView style={{height:'84.5%'}}>
                        {/* Alphabetized list of skills */}
                        <AlphabetList
                            data={result}
                            indexLetterColor={'rgba(0,0,0,0)'}
                            renderCustomItem={(item: any) => (
                                <CategoryName
                                    skill={item.value}
                                    categoryid={item.key}
                                    active={item.active}
                                    categories={cats}
                                />
                            )}
                            renderCustomSectionHeader={(section: any) => (
                                <View style={catStyle.sectionHeaderContainer}>
                                    <Text style={catStyle.sectionHeaderLabel}>{section.title}</Text>
                                </View>
                            )}
                        />
                    </ScrollView>
                </View>

                :
                // if status is false, return a table of stale categories
                <View>
                    <View style={catStyle.instructView}>
                        {/* Search Bar for categories */}
                        <SearchBar
                            placeholder="Enter Skill..."
                            onChangeText={(value) => {
                                searchSet(value);
                            }}
                            value={search}
                            inputStyle={catStyle.inputBar}
                            inputContainerStyle={catStyle.inputContainer}
                            containerStyle={catStyle.searchContainer}
                            searchIcon={{color: 'white'}}
                            style={catStyle.searchContainer}
                        />
                        {/* Toggle instructions */}
                        <Text style={catStyle.instructText}>Click to toggle Active/Stale Categories</Text>
                    </View>
                    <ScrollView style={{height:'84.5%'}}>
                        {/* Alphabetized list of skills */}
                        <AlphabetList
                            data={result}
                            indexLetterColor={'rgba(0,0,0,0)'}
                            renderCustomItem={(item: any) => (
                                <CategoryName
                                    skill={item.value}
                                    categoryid={item.key}
                                    active={item.active}
                                    categories={cats}
                                />
                            )}
                            renderCustomSectionHeader={(section: any) => (
                                <View style={catStyle.sectionHeaderContainer}>
                                    <Text style={catStyle.sectionHeaderLabel}>{section.title}</Text>
                                </View>
                            )}
                        />
                    </ScrollView>
                </View>
            }
        </View>
    )
}
