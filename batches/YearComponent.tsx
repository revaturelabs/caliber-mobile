import React from 'react';
import { View, Text, Pressable } from 'react-native';
import { Card } from 'react-native-elements';
import { FlatList } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

export default function BatchesComponent() {
    const nav = useNavigation();
    const keyExtractor = (item: object, index: number) => {
        return index.toString();
    };

    const validYears: any = [2020, 2021];
    
    // Sets the year and resets the other dropdowns
    function handleYearSelect(year: number) {
        nav.navigate('Quarter', {year: year});
    }

    const yearCard = (params: any) => {
        return (
            <Pressable onPress={() => handleYearSelect(params.item)}>
                <Card>
                    <Text>{params.item}</Text>
                </Card>
            </Pressable>
        )
    }

    return (
        <View>
            {validYears.length > 0 && (
                <FlatList
                    data={validYears}
                    renderItem={yearCard}
                    keyExtractor={keyExtractor}
                />
            )}
        </View>
    );
}
