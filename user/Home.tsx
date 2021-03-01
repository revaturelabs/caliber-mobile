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
    const inputUser = (state: ReducerState) => state.userReducer.user;
    const currentUser = useSelector(inputUser);
    const dispatch = useDispatch();

    
    return (
        <View>
            <Text>
                Setting up the new home component for {currentUser.email}
            </Text>

            <View>
                <Text>Year Component will be placed here</Text>
                {/* <YearComponent /> */}
            </View>
        
            <View>
                <Text>Quarter Component wil be placed here ??</Text>
                {/* <QuarterComponent /> */}
            </View>
            
            <View>
                <Text>
                    Batch list component will be placed here ??
                    {/* <BatchListComponent /> */}
                </Text>
            </View>

            <View>
                Batch Page will be placed here??
                {/* <BatchPageComponent ></BatchPageComponent> */}
            </View>
            <LogoutComponent/>
        </View>
    )
}
