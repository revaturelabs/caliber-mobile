import { NavigationContainer } from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import Test from '../test';

import ManageCategories from '../categories/manageCategories'
import LoginComponent from '../user/Login';
import weekCategoryList from '../weekCategories/WeekCategoryList';
  
export type StackParam = {
  ManageCategories: undefined;
};

const Stack = createStackNavigator();

export function Router() {
    return (
        <Stack.Navigator initialRouteName='Manage Categories'>
          {/* <Stack.Screen name='Login' component={} />
          <Stack.Screen name='Home' component={} />
          <Stack.Screen name='Manage Batch' component={} />
          <Stack.Screen name='Assess Batch' component={} /> */}
          {/* <Stack.Screen name='Quality Audit' component={} />
          <Stack.Screen name='Reports' component={} /> */}
          <Stack.Screen name='WeekCatList' component={weekCategoryList}/>
        </Stack.Navigator>
    );
  }

export default Router;