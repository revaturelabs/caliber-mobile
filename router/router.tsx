import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import AssociateDetail from '../associate/associate.detail';
import ManageCategories from '../categories/manageCategories';
  
export type StackParam = {
  ManageCategories: undefined;
};

const Stack = createStackNavigator<StackParam>();

function Router() {
    return (
        <Stack.Navigator initialRouteName='TestingNotesCard'>
          {/* <Stack.Screen name='Login' component={} />
          <Stack.Screen name='Home' component={} />
          <Stack.Screen name='Manage Batch' component={} />
          <Stack.Screen name='Assess Batch' component={} />
          <Stack.Screen name='ManageCategories' component={ManageCategories} />
          <Stack.Screen name='Quality Audit' component={} />
          <Stack.Screen name='Reports' component={} /> */}
          <Stack.Screen name='TestingNotesCard' component={AssociateDetail} />
        </Stack.Navigator>
    );
  }

export default Router;