import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import ManageCategories from '../categories/manageCategories'
import QualityAuditComponent from '../qc/QualityAuditComponent';
import LoginComponent from '../user/Login';
  
export type StackParam = {
  ManageCategories: undefined;
  QualityAudit: undefined;
};

const Stack = createStackNavigator<StackParam>();

function Router() {
    return (
        <Stack.Navigator initialRouteName='Login'>
          {/* <Stack.Screen name='Login' component={LoginComponent} /> */}
          {/* <Stack.Screen name='Home' component={} />
          <Stack.Screen name='Manage Batch' component={} />
          <Stack.Screen name='Assess Batch' component={} /> */}
          <Stack.Screen name='ManageCategories' component={ManageCategories} />
          <Stack.Screen name='QualityAudit' component={QualityAuditComponent} />
          {/* <Stack.Screen name='Reports' component={} /> */}
        </Stack.Navigator>
    );
  }

export default Router;