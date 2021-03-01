import React from 'react';
import { Image } from 'react-native-elements';
import { createStackNavigator } from '@react-navigation/stack';
import { StackHeaderOptions } from '@react-navigation/stack/lib/typescript/src/types';
import LoginComponent from '../user/Login';
import LogoutComponent from '../user/Logout';
import { DrawerNavigator } from './DrawerNavigator.component';
import UnderDevelopmentComponent from '../UnderDevelopmentComponent';
import { HeaderComponent } from './Header.component';
import { NavigationContainer } from '@react-navigation/native';
import { View } from 'react-native';

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
      <Stack.Navigator
        initialRouteName='Caliber'
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name='Login' component={LoginComponent} />
        <Stack.Screen name='Cailber' component={DrawerNavigator} />
        <Stack.Screen
          name='Under Development'
          component={UnderDevelopmentComponent}
        />
      </Stack.Navigator>
    </View>
  );
}
