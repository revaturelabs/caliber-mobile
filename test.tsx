import React from 'react';
import { View, Text } from 'react-native';
import weekCategoryList from './weekCategories/weekCategoryList';

export default function Test(){
    return(
        <View>
            <Text>test?</Text>
            
            {weekCategoryList({weekId:0})}
            
        </View>
    )
}