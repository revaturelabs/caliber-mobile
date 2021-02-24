import React, { useEffect } from 'react';
import { View, Text, ActivityIndicator, Pressable } from 'react-native';
import { Card } from 'react-native-elements';
import { useSelector, useDispatch } from 'react-redux';
import { FlatList } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

import { RootState } from '../store/store';
import { getBatches, changeBatch } from '../store/actions';
import batchService from './BatchService';

export default function BatchListComponent({route}: any) {
    const nav = useNavigation();
    const dispatch = useDispatch();
    const batches = useSelector((state: RootState) => state.batchReducer.batches);
    const keyExtractor = (item: object, index: number) => {
        return index.toString();
    };

    const year = route.params.year;
    const quarter = quarterToNumber(route.params.quarter);

    // Changes the chosen quarter from a string to a number for use in the filter
    function quarterToNumber(strQuarter: string) {
        switch (strQuarter) {
            case 'All Quarters':
                return 0;
            case 'Q1':
                return 1;
            case 'Q2':
                return 2;
            case 'Q3':
                return 3;
            case 'Q4':
                return 4;
        }
    }

    // Placeholder user
    const trainer = {
        role: 'ROLE_QC',
        email: 'mock1005.employee7c90a542-e70e-4db5-be8b-629e62f851c5@mock.com',
        firstName: 'Mock 1005',
        lastName: 'Employee 1005',
    };

    // Retrieves a batch list based on filters
    useEffect(() => {
        if (trainer.role === 'ROLE_TRAINER') {
            batchService
                .getBatchesByTrainerEmail(trainer.email)
                .then((batchesResp) => {
                    dispatch(getBatches(batchesResp));
                });
        } else if (year && quarter) {
            batchService
                .getAllBatches(Number(year), Number(quarter))
                .then((batchesResp) => {
                    dispatch(getBatches(batchesResp));
                });
        }
    }, [year, quarter]);

    // Upon selection, updates the state with a chosen batch
    // The navigator's destination is to be replaced in code after determining the next component in line
    function handleBatchSelect(index: number) {
        dispatch(changeBatch(batches[index]));
        nav.navigate('BatchDetail');
    }

    // Display a selectable batch
    const batchCard = (params: any) => {
        return (
            <Pressable onPress={() => handleBatchSelect(params.index)}>
                <Card>
                    <Text>{params.item.trainer}</Text>
                    <Text>{params.item.skill}</Text>
                    <Text>{params.item.startDate}</Text>
                </Card>
            </Pressable>
        )
    }
    
    // Displays a list of batches based on filters
    return (
        <View>
            {batches.length > 0 ? 
                (year !== null && quarter !== null && batches[0] !== null ? (
                    <FlatList
                        data={batches}
                        renderItem={batchCard}
                        keyExtractor={keyExtractor}
                    />) :
                <ActivityIndicator/>
            ) : <ActivityIndicator/>}
        </View>
    )
}