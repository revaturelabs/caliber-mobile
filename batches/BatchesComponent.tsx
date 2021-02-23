import React, { useEffect, useState } from 'react';
import { View, Text, ActivityIndicator } from 'react-native';
import { batch, useDispatch, useSelector } from 'react-redux';
import { FlatList } from 'react-native-gesture-handler';
import { Picker } from '@react-native-picker/picker';
import { useNavigation } from '@react-navigation/native';

import { RootState } from '../store/store';
import { getBatches } from '../store/actions';
import batchService from './BatchService';
import Batch from './Batch';
import { UserInfo } from '../user/user';

export default function BatchesComponent() {
    const dispatch = useDispatch();
    const batches = useSelector((state: RootState) => state.batchReducer.batches);
    const user = useSelector((state: RootState) => state.userReducer.user);
    const [yearFilter, setYearFilter] = useState('');
    const [quarterFilter, setQuarterFilter] = useState('');
    const [batchFilter, setBatchFilter] = useState('');
    const [list, setList] = useState<Batch[]>([]);
    const [chosenBatch, setChosenBatch] = useState<Batch[]>([]);
    const keyExtractor = (item: object, index: number) => {
        return index.toString();
    };

    const validYears: any = [2020, 2021];

    const trainer = {
        role: 'ROLE_QC',
        email: 'mock1005.employee7c90a542-e70e-4db5-be8b-629e62f851c5@mock.com',
        firstName: 'Mock 1005',
        lastName: 'Employee 1005',
    };

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
        );
    };

    // Updates the state with the all of the chosen trainer's batches
    useEffect(() => {
        if (trainer.role === 'ROLE_TRAINER') {
            batchService
                .getBatchesByTrainerEmail(trainer.email)
                .then((batchesResp) => {
                    dispatch(getBatches(batchesResp));
                });
        } else if (yearFilter && quarterFilter) {
            batchService
                .getAllBatches(Number(yearFilter), Number(quarterFilter))
                .then((batchesResp) => {
                    dispatch(getBatches(batchesResp));
                    setList(batchesResp);
                });
        }
    }, [yearFilter, quarterFilter]);

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
            setList(
                batches
                    .filter((batch) => {
                        if (batch.startDate.indexOf(String(yearFilter)) >= 0) {
                            return batch;
                        }
                    })
                    .filter((batch) => {
                        if (checkQuarter(batch.startDate) == quarter) {
                            return batch;
                        }
                    })
            );
        }
    }

    // Selects a specified batch to display
    function handleFilter(newBatchId: any) {
        setBatchFilter(newBatchId);
        if (newBatchId) {
            setChosenBatch(batches.filter((batch) => batch.batchId == newBatchId));
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
                return 1;
            case 4:
            case 5:
            case 6:
                return 2;
            case 7:
            case 8:
            case 9:
                return 3;
            case 10:
            case 11:
            case 12:
                return 4;
        }
    }

    return (
        <>
            <View style={{ flexDirection: 'row' }}>
                <>
                    {validYears.length > 0 ? <Picker style={{ width: 100, color: 'orange', fontWeight: '700' }} selectedValue={yearFilter} onValueChange={handleYearFilter}>
                        <Picker.Item label="Year" value="" />
                        {validYears.map((year: any) => (
                            <Picker.Item key={year} label={String(year)} value={year} />
                        ))}
                    </Picker> : <Text>Loading</Text>}
                    {yearFilter !== '' && (
                        <Picker
                            style={{ width: 100, color: 'orange', fontWeight: '700' }}
                            selectedValue={quarterFilter}
                            onValueChange={handleQuarterFilter}
                        >
                            <Picker.Item label="Quarter" value="" />
                            <Picker.Item label="Q1" value="1" />
                            <Picker.Item label="Q2" value="2" />
                            <Picker.Item label="Q3" value="3" />
                            <Picker.Item label="Q4" value="4" />
                        </Picker>
                    )}
                    {quarterFilter !== '' && batches && list && list.length ? <Picker style={{ width: 500, color: 'orange', fontWeight: '700' }} selectedValue={batchFilter} onValueChange={handleFilter}>
                        <Picker.Item label="Choose Batch" value="" />
                        {list.map((batch) => (
                            <Picker.Item
                                key={batch.batchId}
                                label={
                                    batch.trainer
                                        ? batch.trainer +
                                        ' - ' +
                                        batch.skill +
                                        ' - ' +
                                        batch.startDate
                                        : trainer.firstName +
                                        ' ' +
                                        trainer.lastName +
                                        ' - ' +
                                        batch.skill +
                                        ' - ' +
                                        batch.startDate
                                }
                                value={batch.batchId}
                            />
                        ))}
                    </Picker> : <Text>No Batches</Text>}
                </>
            </View>
            <View>
                {chosenBatch.length > 0 && trainer.role !== "ROLE_TRAINER" ? 
                <Text>{chosenBatch[0].trainer + ' ' + chosenBatch[0].skill}</Text> : 
                <Text>{chosenBatch[0].skill}</Text>}
                <FlatList
                    data={batchFilter == '' ? null : chosenBatch}
                    renderItem={batchPreview}
                    keyExtractor={keyExtractor}
                />
            </View>
        </>
    );
}
