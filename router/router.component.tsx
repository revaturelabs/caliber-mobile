import React from 'react';
import { Text, Image } from 'react-native-elements';
import Icon from 'react-native-vector-icons/Ionicons';
import { createStackNavigator } from '@react-navigation/stack';
import { StackHeaderOptions } from '@react-navigation/stack/lib/typescript/src/types';
import BatchesComponent from '../batches/batches.component';
import LoginComponent from '../user/Login';
<<<<<<< HEAD
import { DrawerNavigator } from './DrawerNavigator.component';
import { View } from 'react-native';

export type StackParams = {
  Login: undefined;
  Home: undefined;
  Batches: undefined;
};

const headerOptions: StackHeaderOptions = {
  headerTitle: () => (
    <View>
      <Icon.Button name='ios-menu' size={25}></Icon.Button>
      <Image
        style={{ width: 165, height: 50, margin: 30 }}
        source={require('./rev-logo.png')}
      />
    </View>
  ),
=======
import Test from '../user/Test';
import LogoutComponent from '../user/Logout';

export type StackParams = {
    Login: undefined;
    Test: undefined;
    Home: undefined;
    Batches: undefined;
};

const headerOptions: StackHeaderOptions = {
    headerTitle: () => <Image style={{width:165, height:50, margin:30}}source={require('./rev-logo.png')} />,
    headerRight: () => <LogoutComponent/>,
>>>>>>> 82660db3edfb1d4ebcbf6810ceb5ba25f381eded
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
        <Stack.Navigator initialRouteName='Caliber'>
            <Stack.Screen
                name='Login'
                component={LoginComponent}
                options={headerOptions}
            />
            <Stack.Screen
                name='Test'
                component={Test}
                options={headerOptions}
            />
            <Stack.Screen
                name='Batches'
                component={BatchesComponent}
                options={headerOptions}
            />
            <Stack.Screen
                name='Logout'
                component={LogoutComponent}
                options={headerOptions}
            />
        </Stack.Navigator>
    )
}
>>>>>>> 82660db3edfb1d4ebcbf6810ceb5ba25f381eded
