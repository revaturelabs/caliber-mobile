import React from 'react'
import { View, Text } from 'react-native'
import { useDispatch, useSelector } from 'react-redux';
import BatchListComponent from '../batches/BatchListComponent';
import QuarterComponent from '../batches/QuarterComponent';
import YearComponent from '../batches/YearComponent';
import BatchPageComponent from '../batchPage/BatchPageComponent';
import { ReducerState } from '../store/store';
import LogoutComponent from './Logout';

export default function Home() {
    const inputUser = (state: ReducerState) => state.userReducer.userLogin;
    const newUser = useSelector(inputUser);
    const dispatch = useDispatch();

    
    return (
        <View>
            <Text>
                Setting up the new home component for {newUser.email}
            </Text>
            <YearComponent />
            {/* <QuarterComponent /> */}
            {/* <BatchListComponent /> */}
            <BatchPageComponent ></BatchPageComponent>
            <LogoutComponent/>
        </View>
    )
}
