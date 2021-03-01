import React from 'react';
import { Text,TouchableHighlight} from 'react-native';
import {logout} from '../test/auth/functions';
import {UserInfo} from './user';

/**LogoutButton */

interface LogoutProp {
  navigation?: any;
}

function LogoutComponent({ navigation }: LogoutProp) {
  return (
    <TouchableHighlight
      onPress={() => {
        logout();
        navigation.navigate('Login');
      }}
      style={{
        backgroundColor: '#F26925',
        height: 40,
        width: 133,
        borderRadius: 40,
        alignItems: 'center',
        marginBottom: 40,
      }}>
      <Text
        style={{
          alignItems: 'center',
          padding: 8,
          color: '#fff',
          fontSize: 18,
          fontWeight: 'bold',
        }}>
        LOG OUT
      </Text>
    </TouchableHighlight>
  );
}

export default LogoutComponent;
