import React from 'react';
import { Image } from 'react-native-elements';
import { createStackNavigator } from '@react-navigation/stack';
import { StackHeaderOptions } from '@react-navigation/stack/lib/typescript/src/types';
<<<<<<< HEAD
import LoginComponent from '../user/Login';
import LogoutComponent from '../user/Logout';
import { DrawerNavigator } from './DrawerNavigator.component';
=======
import BatchesComponent from '../batches/batches.component';
import AssociateTableComponent from '../associate/AssociateTableComponent';
import UnderDevelopmentComponent from '../UnderDevelopmentComponent';
import LoginComponent from '../user/Login';
import BatchPageComponent from '../batchPage/BatchPageComponent';
>>>>>>> 4e8c1c67263c0879b0d106f41f346d25ac249088

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
<<<<<<< HEAD
  return (
    <Stack.Navigator initialRouteName='Caliber'>
      <Stack.Screen
        name='Login'
        component={LoginComponent}
        options={headerOptions}
      />
      <Stack.Screen name='Drawer' component={DrawerNavigator} />
    </Stack.Navigator>
  );
}
=======
    return (
        <Stack.Navigator initialRouteName='BatchPageComponent'>
            <Stack.Screen
                name='Login'
                component={LoginComponent}
                options={headerOptions}
            />
            <Stack.Screen
                name='Batches'
                component={BatchesComponent}
                options={headerOptions}
            />
            <Stack.Screen 
                name='BatchPageComponent' 
                component={BatchPageComponent} 
            />
            <Stack.Screen 
                name='UnderDevelopment' 
                component={UnderDevelopmentComponent} 
            />
        </Stack.Navigator>
    )
}
>>>>>>> 4e8c1c67263c0879b0d106f41f346d25ac249088
