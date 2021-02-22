import React, { useEffect, useState } from 'react';
import { View, Text, ActivityIndicator } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { FlatList } from 'react-native-gesture-handler';
import { Picker } from '@react-native-picker/picker';
import { useNavigation } from '@react-navigation/native';

import { RootState } from '../store/store';
import { getBatches } from '../store/actions';
import batchService from './BatchService';
import Batch from './Batch';

export default function BatchesComponent() {
    const navigation = useNavigation();
    const dispatch = useDispatch();
    const batches = useSelector((state: RootState) => state.batchReducer.batches);
    const [yearFilter, setYearFilter] = useState('');
    const [quarterFilter, setQuarterFilter] = useState('');
    const [batchFilter, setBatchFilter] = useState('');
    const [list, setList] = useState<Batch[]>([]);
    const [chosenBatch, setChosenBatch] = useState<Batch[]>([]);
    const keyExtractor = (item: object, index: number) => { return index.toString(); }

    const validYears: any = [2020, 2021];

    const trainer = {email: 'mock1005.employee7c90a542-e70e-4db5-be8b-629e62f851c5@mock.com', firstName: 'Mock 1005', lastName: 'Employee 1005'};

    const batchPreview = (params: any) => {
        return (
            <View>
                <Text>{params.item.name}</Text>
                <Text>{params.item.skill}</Text>
                <Text>{params.item.type}</Text>
                <Text>{params.item.location}</Text>
                <Text>{params.item.startDate}</Text>
                <Text>{params.item.endDate}</Text>
            </View>
        )
    }

    // Updates the state with the all of the chosen trainer's batches
    useEffect(() => {
        batchService.getBatchesByTrainerEmail(trainer.email).then((batchesResp) => {
            dispatch(getBatches(batchesResp));
        });
    }, []);

    // Sets the year and resets the other dropdowns
    function handleYearFilter(year: any) {
        setYearFilter(year);
        setQuarterFilter('');
        setBatchFilter('');
    }

    // Sets the quarter and resets the batch dropdown
    function handleQuarterFilter(quarter: any) {
        setQuarterFilter(quarter);
        setBatchFilter('');
        if (quarter && yearFilter) {
            setList(batches.filter( batch => {
                if (batch.startDate.indexOf(String(yearFilter)) >= 0) {
                    return batch;
                }
            }).filter( batch => {
                if (checkQuarter(batch.startDate) == quarter) {
                    return batch;
                }
            }));
        }
    }

    // Selects a specified batch to display
    function handleFilter(newBatchId: any) {
        setBatchFilter(newBatchId);
        if(newBatchId){
            setChosenBatch(batches.filter(batch=>batch.batchId == newBatchId));
        } else {
            setChosenBatch(batches);
        }
    }

    // Checks a provided date to see which quarter it's in and returns a string representing the quarter
    function checkQuarter(date: string) {
        const month: number = Number(date.slice(5, 7));
        switch (month) {
            case 1:
            case 2:
            case 3:
                return 'Q1';
            case 4:
            case 5:
            case 6:
                return 'Q2';
            case 7:
            case 8:
            case 9:
                return 'Q3';
            case 10:
            case 11:
            case 12:
                return 'Q4';
        }
    }

    return (
        <View>
            {(() => {
                if (batches[0]) {
                    return (
                        <View>
                            <Picker
                                selectedValue={yearFilter}
                                onValueChange={handleYearFilter}>
                                <Picker.Item
                                    label='Year'
                                    value=''/>
                                {validYears.map((year: any) => {
                                    return <Picker.Item
                                        key={year}
                                        label={year}
                                        value={year}/>
                                })}
                            </Picker>
                            {(() => {
                                if (yearFilter) {
                                    return (
                                        <View>                                            
                                            <Picker
                                            selectedValue={quarterFilter}
                                            onValueChange={handleQuarterFilter}>
                                                <Picker.Item
                                                    label='Quarter'
                                                    value=''/>
                                                <Picker.Item
                                                    label='Q1'
                                                    value='Q1'/>
                                                <Picker.Item
                                                    label='Q2'
                                                    value='Q2'/>
                                                <Picker.Item
                                                    label='Q3'
                                                    value='Q3'/>
                                                <Picker.Item
                                                    label='Q4'
                                                    value='Q4'/>
                                            </Picker>
                                            {(() => {
                                                if (quarterFilter) {
                                                    return (
                                                        <Picker
                                                            selectedValue={batchFilter}
                                                            onValueChange={handleFilter}>
                                                            {(() => {
                                                                if (list[0]) {
                                                                    return (
                                                                        <Picker.Item
                                                                            label='Choose Batch'
                                                                            value=''/>
                                                                    )
                                                                } else {
                                                                    return (
                                                                        <Picker.Item
                                                                            label='No Batches Found'
                                                                            value=''/>
                                                                    )
                                                                }
                                                            })()}
                                                            {list.map((batch) => {
                                                                return (
                                                                    <Picker.Item
                                                                        key={batch.batchId}
                                                                        label={trainer.firstName + ' ' + trainer.lastName + ' - ' + batch.skill + ' - ' + batch.startDate}
                                                                        value={batch.batchId}/>
                                                                )
                                                            })}
                                                        </Picker>
                                                    )
                                                }
                                            })()}
                                        </View>
                                    )
                                }
                            })()}
                            <FlatList data={batchFilter == '' ? null : chosenBatch} renderItem={batchPreview} keyExtractor={keyExtractor}/>
                        </View>
                    )
                } else {
                    return (
                        <ActivityIndicator/>
                    )
                }
            })()}
        </View>
    )
}
