import React, { useEffect, useState } from 'react';
import { View, Text, ActivityIndicator } from 'react-native';
import { useDispatch,, useSelector } from 'react-redux';
import { FlatList } from 'react-native-gesture-handler';
import { Picker } from '@react-native-picker/picker';
import { useNavigation } from '@react-navigation/native';

import { BatchState } from '../store/store';
import { getBatches } from '../store/actions';
import batchService from './batch.service';
import Batch from './batch';

export default function BatchesComponent() {
    const navigation = useNavigation();
    const dispatch = useDispatch();
    const batches = useSelector((state: BatchState) => state.batches);
    const [filter, setFilter] = useState('');
    const [list, setList] = useState<Batch[]>([]);
    const keyExtractor = (item: object, index: number) => { return index.toString(); }

    const batchPreview = (params: any) => {
        return (
            <View>
                <Text>params.item.name</Text>
            </View>
        )
    }

    function handleFilter(newBatchId: any) {
        setFilter(newBatchId);
        if(newBatchId){
            setList(batches.filter(batch=>batch.batchId == newBatchId));
        } else {
            setList(batches);
        }
    }

    useEffect(() => {
        batchService.getBatchesByTrainerEmail().then((batches) => {
            dispatch(getBatches(batches));
        });
    }, []);

    return (
        <View>
            {(() => {
                if (batches[0]) {
                    return (
                        <View>
                            <Picker
                                selectedValue={filter}
                                onValueChange={handleFilter}>
                                <Picker.Item
                                    label='No Filter'
                                    value=''/>
                                {batches.length > 0 && batches.map((batch) => {
                                    return <Picker.Item
                                        key={batch.batchId}
                                        label={batch.name}
                                        value={batch.batchId}/>
                                })}
                            </Picker>
                            {(() => {
                                ((batches[0])) ? 
                                    <FlatList data={filter == '' ? batches : list} renderItem={batchPreview} keyExtractor={keyExtractor}/>
                                : <ActivityIndicator/>
                            })()}
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