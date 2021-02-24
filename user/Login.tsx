import { auth0SignInButton } from 'aws-amplify';
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableHighlight, Image } from 'react-native';
import { style } from '../global_styles';
import { RootState, UserState } from '../store/store';
import { f, auth, database } from './config';
import { useDispatch, useSelector } from 'react-redux';
import { getUser, loginChange } from '../store/actions';
import { Input } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';

interface LoginProp {
  navigation: any;
}

export default function LoginComponent({ navigation }: LoginProp) {
  const inputUser = (state: RootState) => state.userReducer.userLogin;
  const newUser = useSelector(inputUser);
  const dispatch = useDispatch();

  //should be in App.tsx when the store is declared
  /* useEffect(() => {
        auth.onAuthStateChanged((loggedUser) => {
            console.log('auth state changed');
            if(loggedUser){
                loggedUser.getIdTokenResult().then(token => {
                    const role: string = token.claims.role;
                    let email: string = '';
                    if(loggedUser.email){
                        email = loggedUser.email
                    }
                    dispatch(getUser({
                        ...user,
                        uid: loggedUser.uid,
                        email: email,
                        role: role
                    }));
                })
            }else{
                console.log('not logged in');
            }
        });
    }, []); */

  const loginUser = async (newUser: any) => {
    if (newUser.email != '' && newUser.password != '') {
      try {
        let email = newUser.email;
        let password = newUser.password;
        let user = await auth.signInWithEmailAndPassword(email, password);
        navigation.navigate('Drawer');
      } catch (error) {
        console.log(error);
      }
    } else {
      alert('Missing email or password');
    }
  };

  return (
    <View style={style.container}>
      <Text style={style.caliber}>Caliber</Text>

      <View style={style.login}>
        <View style={style.logininput}>
          <Input
            placeholder={'Email'}
            style={style.input}
            onChangeText={(value) =>
              dispatch(loginChange({ ...newUser, email: value }))
            }
            value={newUser.email}
          />
        </View>

        <View>
          <Input
            placeholder={'Password'}
            style={style.input}
            onChangeText={(value) =>
              dispatch(loginChange({ ...newUser, password: value }))
            }
            secureTextEntry
            value={newUser.password}
          />
        </View>
      </View>

      <View>
        <TouchableHighlight
          onPress={() => loginUser(newUser)}
          style={{
            backgroundColor: '#F26925',
            height: 45,
            width: 200,
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
            LOG IN {'>'}
          </Text>
        </TouchableHighlight>

        <TouchableHighlight
          // onPress={ forgot password }
          style={{
            backgroundColor: '#fff',
            height: 45,
            width: 200,
            borderRadius: 40,
            alignItems: 'center',
          }}>
          <Text
            style={{
              alignItems: 'center',
              color: '#72A4C2',
              fontSize: 18,
              fontWeight: 'bold',
            }}>
            Forgot password?
          </Text>
        </TouchableHighlight>
      </View>
    </View>
  );
}
