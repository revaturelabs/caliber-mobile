import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { View, Text, Button } from 'react-native';
import {Input} from "react-native-elements";
import {style} from "../global_styles";

import {sendPasswordResetEmail} from '../test/auth/functions';
import { RootState } from '../store/store';

import {loginChange} from '../store/actions';


function ForgotPassword() {
    //const [email, setEmail] = useState('');
    // const [loading, setLoading] = useState(false);
    const dispatch = useDispatch();
    const inputUser = (state: RootState) => state.userReducer.userLogin;
    const newUser = useSelector(inputUser);


    // function submitHandler(){
    //     setLoading(true);
    //     sendPasswordResetEmail(newUser.email, "Email Sent!");
    //     setLoading(false);
    // }

    return (
            <View style={style.login}>
                <View>
                    <Text>Email: </Text>
                    <Input
                        placeholder="Email address"
                        onChangeText={
                            (value) => dispatch(loginChange({...newUser, email:value}))}
                        value={newUser.email}
                    />
                {/* <Button onPress={submitHandler} title="Send Email" /> */}
                </View>
            </View>
    );
}


export default ForgotPassword;