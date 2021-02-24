import React from 'react';
import { Button } from 'react-native';
import {logout} from '../test/auth/functions';
import { useNavigation } from '@react-navigation/native';

/**Trial LogoutButton */

interface LogoutProp {
    navigation: any;
}

function LogoutComponent({ navigation }: LogoutProp){
    return (
        <Button onPress={ () => {
            logout();
        }} 
        title="Logout" />
    );
}

export default LogoutComponent;