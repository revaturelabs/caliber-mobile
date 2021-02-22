import React from 'react';
import { Text } from 'react-native-elements';
import { createStackNavigator } from '@react-navigation/stack';
import { StackHeaderOptions } from '@react-navigation/stack/lib/typescript/src/types';
import BatchesComponent from '../batches/batches.component';

export type StackParams = {
    Home: undefined;
    Batches: undefined;
};

const headerOptions: StackHeaderOptions = {
    headerTitle: () => <Text>Caliber</Text>,
};

const Stack = createStackNavigator();

export default function RouterComponent(props: any) {
    return (
        <Stack.Navigator initialRouteName='Batches'>
            <Stack.Screen
                name='Batches'
                component={BatchesComponent}
                options={headerOptions}
            />
        </Stack.Navigator>
    )
}