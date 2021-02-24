import React, { useEffect, useState } from 'react';
import { View, Text, Image, ActivityIndicator, Pressable } from 'react-native';
import { Card } from 'react-native-elements';
import { useSelector, useDispatch } from 'react-redux';
import { FlatList } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

import { RootState } from '../store/store';
import { getBatches } from '../store/actions';
import batchService from './BatchService';

export default function BatchListComponent({route}) {
    const nav = useNavigation();
    const dispatch = useDispatch();
    const batches = useSelector((state: RootState) => state.batchReducer.batches);
    const keyExtractor = (item: object, index: number) => {
        return index.toString();
    };

    const year = route.params.year;
    const quarter = quarterToNumber(route.params.quarter);

    function quarterToNumber(strQuarter: string) {
        switch (strQuarter) {
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


    const trainer = {
        role: 'ROLE_QC',
        email: 'mock1005.employee7c90a542-e70e-4db5-be8b-629e62f851c5@mock.com',
        firstName: 'Mock 1005',
        lastName: 'Employee 1005',
    };

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

    console.log(route.params);
    console.log(year + ' ' + quarter);

    function handleBatchSelect() {
        //nav.navigate('Batches', props.year, quarter);
        console.log('Selected Batch');
    }

    const batchCard = (params: any) => {
        return (
            <Pressable onPress={handleBatchSelect}>
                <Card>
                    <Text>{params.item.name + ' ' + params.item.startDate}</Text>
                </Card>
            </Pressable>
        )
    }
    
    return (
        <View>
            {year !== null && (
                <FlatList
                    data={batches}
                    renderItem={batchCard}
                    keyExtractor={keyExtractor}
                />
            )}
        </View>
    )
}