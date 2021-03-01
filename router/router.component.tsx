import React from 'react';
import { Image } from 'react-native-elements';
import { createStackNavigator } from '@react-navigation/stack';
import { StackHeaderOptions } from '@react-navigation/stack/lib/typescript/src/types';
import LoginComponent from '../user/Login';
import LogoutComponent from '../user/Logout';
import { DrawerNavigator } from './DrawerNavigator.component';
import UnderDevelopmentComponent from '../UnderDevelopmentComponent';
import { View } from 'react-native';
import ForgotPassword from '../user/ForgotPassword';

export type StackParams = {
  Login: undefined;
  Test: undefined;
  Home: undefined;
  Batches: undefined;
};

const headerOptions: StackHeaderOptions = {
  headerTitle: () => (
    <Image
      style={{ width: 165, height: 50, margin: 30 }}
      source={require('./rev-logo.png')}
    />
  ),
  headerRight: () => <LogoutComponent />,
};

const Stack = createStackNavigator();

export default function RouterComponent(props: any) {
  return (
    <View>
      <Stack.Navigator initialRouteName='Caliber' screenOptions={headerOptions}>
        <Stack.Screen name='Login' component={LoginComponent} />
        <Stack.Screen name='Drawer' component={DrawerNavigator} />
        <Stack.Screen
          name='Under Development'
          component={UnderDevelopmentComponent}
        />
        <Stack.Screen
          name='Logout'
          component={LogoutComponent}
          options={headerOptions}
        />
        <Stack.Screen
          name='ForgotPassword'
          component={ForgotPassword}
          options={headerOptions}
        />
      </Stack.Navigator>
    </View>
  );
}
