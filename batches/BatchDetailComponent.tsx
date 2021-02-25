// This is a placeholder to test functionality; previous component will instead link to a TBD component

import React from 'react';
import { View, Text } from 'react-native';
import { useSelector } from 'react-redux';

import { RootState } from '../store/store';

export default function BatchDetailComponent() {
    const batch = useSelector((state: RootState) => state.batchReducer.batch);

    return (
        <View>
            <Text>{batch.name}</Text>
            <Text>{batch.skill}</Text>
            <Text>{batch.type}</Text>
            <Text>{batch.location}</Text>
            <Text>{batch.startDate}</Text>
            <Text>{batch.endDate}</Text>
        </View>
    );
}