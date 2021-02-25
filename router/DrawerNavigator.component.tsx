import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import BatchesComponent from '../batches/batches.component';
import LoginComponent from '../user/Login';
import ManageCategories from '../categoriesFeature/ManageCategories';
import BatchStackNavigator from './BatchStackNavigator.component';
import { StackHeaderOptions } from '@react-navigation/stack/lib/typescript/src/types';
import LogoutComponent from '../user/Logout';
import { Image } from 'react-native-elements';
import Icon from 'react-native-vector-icons/Ionicons';

const Drawer = createDrawerNavigator();

const headerOptions: StackHeaderOptions = {
  headerTitle: () => (
    <Image
      style={{ width: 165, height: 50, margin: 30 }}
      source={require('./rev-logo.png')}
    />
  ),
  headerRight: () => <LogoutComponent />,
  headerLeft: () => <Icon.Button name='ios-menu' size={25}></Icon.Button>,
};

export function DrawerNavigator() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen
        name='Home'
        component={BatchStackNavigator}></Drawer.Screen>
      <Drawer.Screen
        name='QC Audit'
        component={BatchStackNavigator}></Drawer.Screen>
      <Drawer.Screen
        name='Reports'
        component={BatchStackNavigator}></Drawer.Screen>
      <Drawer.Screen
        name='Management'
        component={ManageCategories}></Drawer.Screen>
      <Drawer.Screen name='Logout' component={LoginComponent}></Drawer.Screen>
    </Drawer.Navigator>
  );
}
