import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import BatchListComponent from '../batches/BatchListComponent';
import QuarterComponent from '../batches/QuarterComponent';
import YearComponent from '../batches/YearComponent';
import BatchPageComponent from '../batchPage/BatchPageComponent';
import { generalHeaderOptions } from './MainStackNavigator.component';

const Stack = createStackNavigator();

export type StackParams = {
  Home: undefined;
  Batches: undefined;
  Quarter: [];
  BatchDetail: undefined;
};

export default function BatchStackNavigator() {
  return (
    <Stack.Navigator initialRouteName='Year'>
      <Stack.Screen
        name='Year'
        component={YearComponent}
        options={generalHeaderOptions}
      />
      <Stack.Screen
        name='Quarter'
        component={QuarterComponent}
        options={generalHeaderOptions}
      />
      <Stack.Screen
        name='Batches'
        component={BatchListComponent}
        options={generalHeaderOptions}
      />
      <Stack.Screen
        name='BatchDetail'
        component={BatchPageComponent}
        options={generalHeaderOptions}
      />
    </Stack.Navigator>
  );
}
