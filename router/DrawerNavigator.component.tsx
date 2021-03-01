import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import ManageCategories from '../categoriesFeature/ManageCategories';
import BatchStackNavigator from './BatchStackNavigator.component';
import LogoutComponent from '../user/Logout';
import { Image } from 'react-native-elements';
import { DrawerHeaderOptions } from '@react-navigation/drawer/lib/typescript/src/types';
import UnderDevelopmentComponent from '../UnderDevelopmentComponent';
import { View } from 'react-native';
import { HeaderComponent } from './Header.component';

const Drawer = createDrawerNavigator();

const headerOptions: DrawerHeaderOptions = {
  headerTitle: () => (
    <Image
      style={{ width: 165, height: 50, margin: 30 }}
      source={require('./rev-logo.png')}
    />
  ),
};

export function DrawerNavigator() {
  return (
    <View>
      <HeaderComponent heading='Caliber' navigation={navigator} />
      <Drawer.Navigator
        screenOptions={{
          headerShown: false,
        }}
        drawerContent={(props) => (
          <HeaderComponent {...props} heading='Caliber' />
        )}>
        <Drawer.Screen
          name='Home'
          component={BatchStackNavigator}></Drawer.Screen>
        <Drawer.Screen
          name='QC Audit'
          component={BatchStackNavigator}></Drawer.Screen>
        <Drawer.Screen
          name='Reports'
          component={UnderDevelopmentComponent}></Drawer.Screen>
        <Drawer.Screen
          name='Management'
          component={ManageCategories}></Drawer.Screen>
        <Drawer.Screen
          name='Logout'
          component={LogoutComponent}></Drawer.Screen>
      </Drawer.Navigator>
    </View>
  );
}
