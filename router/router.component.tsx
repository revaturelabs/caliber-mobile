import React from 'react';
import { Text } from 'react-native-elements';
import { createStackNavigator } from '@react-navigation/stack';
import { StackHeaderOptions } from '@react-navigation/stack/lib/typescript/src/types';

import YearComponent from '../batches/YearComponent';
import QuarterComponent from '../batches/QuarterComponent';
import BatchListComponent from '../batches/BatchListComponent';

export type StackParams = {
    Home: undefined;
    Batches: undefined;
    Quarter: [];
};

const headerOptions: StackHeaderOptions = {
    headerTitle: () => <Text>Caliber</Text>,
};

const Stack = createStackNavigator();

export default function RouterComponent(props: any) {
    return (
        <Stack.Navigator initialRouteName='Year'>
            <Stack.Screen
                name='Year'
                component={YearComponent}
                options={headerOptions}
            />
            <Stack.Screen
                name='Quarter'
                component={QuarterComponent}
                options={headerOptions}
            />
            <Stack.Screen
                name='Batches'
                component={BatchListComponent}
                options={headerOptions}
            />
        </Stack.Navigator>
    )
}