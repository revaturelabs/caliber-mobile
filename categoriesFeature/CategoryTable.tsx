import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, SectionList, ScrollView, Button } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { GetActive, GetStale } from '../store/categoriesFeature/CategoryActions';
import store, { CategoryState } from '../store/store';
import { Category } from './Category';
import CategoryName  from './CategoryName';
import categoryService from './CategoryService';
import { FlatList, TouchableOpacity } from 'react-native-gesture-handler';
import { SearchBar } from 'react-native-elements';
import SearchInput, {createFilter} from 'react-native-search-filter';
import { AlphabetList } from 'react-native-section-alphabet-list';
import catStyle from './categoriesStyles';
import CategoryService from './CategoryService';
import { nav } from 'aws-amplify';
import { useNavigation } from '@react-navigation/core';

interface CategoryTableProp {
    status: boolean;
}

/**
 *  This component
 *  @param: status - local state that allows table to show categories conditionally
 *  @returns: view that has a table of either active or stale categories
 */
export function CategoryTable({ status }: CategoryTableProp) {
    const dispatch = useDispatch();
    let [search, searchSet] = useState('');
    const nav = useNavigation();
    const array: Category[] = [];
    const [activeCat, setActive] = useState(array);
    const [staleCat, setStale] = useState(array);
    const [rend, setRend] = useState(0);
    const activeState = useSelector((state: CategoryState) => state.activeCat);
    const staleState = useSelector((state: CategoryState) => state.staleCat);
    
    // after every render, check if there is a change in categories
    useEffect(() => {
        console.log(40);
        async function getCategoryFunc() {
            const active = await CategoryService.getCategories(true);
            const stale = await CategoryService.getCategories(false);
            setActive(active);
            setStale(stale);
        }
        getCategoryFunc();
    }, [store.getState().categoryReducer])

    const result = new Array();
    if (status) {
        // filters the data
        const KEYS_TO_FILTERS = ['skill'];
        const filteredData = activeCat.filter(createFilter(search, KEYS_TO_FILTERS));

        // destructures array into [value: 'skill, key: categoryid, active: boolean] for AlphabetList
        
        for(let element in filteredData) {
            let [value, key, active] = [filteredData[element].skill, filteredData[element].categoryid, filteredData[element].active]
            result.push({value, key, active})
        }
    } else {
        // filters the data
        const KEYS_TO_FILTERS = ['skill'];
        const filteredData = staleCat.filter(createFilter(search, KEYS_TO_FILTERS));

        // destructures array into [value: 'skill, key: categoryid, active: boolean] for AlphabetList

        for(let element in filteredData) {
            let [value, key, active] = [filteredData[element].skill, filteredData[element].categoryid, filteredData[element].active]
            result.push({value, key, active})
        }
    }

    function goHome() {
        nav.navigate('Manage Categories');
    }

    return (
        <View>
            {status == true ?
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
                                    categories={activeCat}
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
                                    categories={staleCat}
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
