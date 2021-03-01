/* import React from 'react';
import { Text, Image } from 'react-native-elements';
import { createStackNavigator } from '@react-navigation/stack';
import { StackHeaderOptions } from '@react-navigation/stack/lib/typescript/src/types';
import BatchesComponent from '../batches/batches.component';
import LoginComponent from '../user/Login';
import LogoutComponent from '../user/Logout';
<<<<<<< HEAD
import { DrawerNavigator } from './DrawerNavigator.component';
import UnderDevelopmentComponent from '../UnderDevelopmentComponent';
import { View } from 'react-native';
import ForgotPassword from '../user/ForgotPassword';
=======
import ForgotPassword from '../user/ForgotPassword';
import Icon from 'react-native-vector-icons/Ionicons';
import Home from '../user/Home';

>>>>>>> facf21c9a28d3f3bc7081a45b1c67f2750ba750c

export type StackParams = {
    Login: undefined;
    Test: undefined;
    Home: undefined;
    Batches: undefined;
};

const headerOptions: StackHeaderOptions = {
<<<<<<< HEAD
  headerTitle: () => (
    <Image
      style={{ width: 165, height: 50, margin: 30 }}
      source={require('./rev-logo.png')}
    />
  ),
  headerRight: () => <LogoutComponent />,
=======
    headerTitle: () => <Image style={{width:165, height:50, margin:30}}source={require('./rev-logo.png')} />,
    headerRight: () => <LogoutComponent />,
    headerLeft: () => <Icon.Button name='ios-menu' size={25} color='#72A4C2' backgroundColor='#fff'
    // onPress={() => navigation.openDrawer()}
    ></Icon.Button>,
>>>>>>> facf21c9a28d3f3bc7081a45b1c67f2750ba750c
};

const Stack = createStackNavigator();

<<<<<<< HEAD
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
=======
export default function OldRouterComponent(props: any) {
    return (
        <Stack.Navigator initialRouteName='Caliber'>
            <Stack.Screen
                name='Login'
                component={LoginComponent}
                options={headerOptions}
            />
            <Stack.Screen
                name='Home'
                component={Home}
                options={headerOptions}
            />
            <Stack.Screen
                name='Batches'
                component={BatchesComponent}
                options={headerOptions}
            />
            <Stack.Screen
                name='ForgotPassword'
                component={ForgotPassword}
                options={headerOptions}
            />
            <Stack.Screen
                name='Logout'
                component={LogoutComponent}
                options={headerOptions}
            />
        </Stack.Navigator>
    )
} */
>>>>>>> facf21c9a28d3f3bc7081a45b1c67f2750ba750c
