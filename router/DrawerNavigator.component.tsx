import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import BatchesComponent from '../batches/batches.component';
import LoginComponent from '../user/Login';
import ManageCategories from '../categoriesFeature/ManageCategories';

const Drawer = createDrawerNavigator();

export function DrawerNavigator() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name='Home' component={BatchesComponent}></Drawer.Screen>
      <Drawer.Screen
        name='QC Audit'
        component={BatchesComponent}></Drawer.Screen>
      <Drawer.Screen
        name='Reports'
        component={BatchesComponent}></Drawer.Screen>
      <Drawer.Screen
        name='Management'
        component={ManageCategories}></Drawer.Screen>
      <Drawer.Screen name='Logout' component={LoginComponent}></Drawer.Screen>
    </Drawer.Navigator>
  );
}
