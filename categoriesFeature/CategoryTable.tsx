import React, { useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { getCategories } from '../store/categoriesFeature/CategoryActions';
import { CategoryState } from '../store/store';
import { Category } from './Category';
import { CategoryName } from './CategoryName';
import categoryService from './CategoryService';
import MaterialTable from 'material-table';

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

    // temporary mock data
    const mockCategories = [
        {
            categoryid: 1,
            skill: 'SQL',
            active: true
        },
        {
            categoryid: 2,
            skill: 'React',
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

    // after every render, check if there is a change in categories
    useEffect(() => {
        categoryService.getCategories(status.toString()).then((results) => {
            dispatch(getCategories(results));
        })
    }, [dispatch])

    const mappedData = mockCategories.map((req: Category, index: number) => (
        <CategoryName
            key={'req-' + index}
            category={req}
            categories={newCategories}
        ></CategoryName>
    ))

    return (
        <>
            {status ?
                // if status is true, return a table of active categories
                <View>
                    {/* Table header */}
                    <Text style={styles.textColor}>Active Categories</Text>

                    {/* Toggle instructions */}
                    <Text style={styles.textColor}>Click to toggle Active/Stale Categories</Text>

                    {/* Table items */}
                    <MaterialTable
                        columns={[
                            {field: 'skill'},
                            {field: '', filtering: false, sorting: false}
                        ]}
                        data={mappedData} 
                        options={{
                            sorting: true,
                            filtering: true
                        }}
                    />
                </View>
                :
                // if status is false, return a table of stale categories
                <View>
                        {/* Table header */}
                        <Text style={styles.textColor}>Stale Categories</Text>

                        {/* Toggle instructions */}
                        <Text style={styles.textColor}>Click to toggle Active/Stale Categories</Text>

                        {/* Table items */}
                        <MaterialTable
                        columns={[
                            {field: 'skill'},
                            {field: '', filtering: false, sorting: false}
                        ]}
                        data={mappedData} 
                        options={{
                            sorting: true,
                            filtering: true
                        }}
                        />
                    </View>
            }
        </>
    )
}

const styles = StyleSheet.create( {
                textColor: {
                color: 'black',
        }
    }
)
