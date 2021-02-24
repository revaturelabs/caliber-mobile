import React, { useEffect, useState } from 'react';
import { View, Text, Image, ActivityIndicator, Pressable } from 'react-native';
import { Card } from 'react-native-elements';
import { FlatList } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

export default function QuarterComponent({route}) {
    const nav = useNavigation();
    const [quarterFilter, setQuarterFilter] = useState('');
    const keyExtractor = (item: object, index: number) => {
        return index.toString();
    };

    const year: number = route.params.year;

    const quarters: any = ['All Quarters', 'Q1', 'Q2', 'Q3', 'Q4'];

    console.log(route);
    console.log(year);
    function handleQuarterSelect(index: number) {
        const quarter = quarters[index];
        nav.navigate('Batches', {year: year, quarter: quarter});
    }

    const quarterCard = (params: any) => {
        return (
            <Pressable onPress={() => handleQuarterSelect(params.index)}>
                <Card>
                    <Text>{params.item}</Text>
                </Card>
            </Pressable>
        )
    }
    
    return (
        <View>
            {year !== null && (
                <FlatList
                    data={quarters}
                    renderItem={quarterCard}
                    keyExtractor={keyExtractor}
                />
            )}
        </View>
    )
}