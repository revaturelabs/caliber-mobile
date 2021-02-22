import React from 'react';
import { View, TextInput } from 'react-native';
import { WeekState } from '../store/store';
import { addOverallNote } from '../store/actions';
import { useDispatch, useSelector } from 'react-redux';

function AddNoteComponent(){
    const dispatch = useDispatch();
    const week = useSelector((state: WeekState) => state.week);

    return (
        <View>
            <TextInput multiline onChangeText={(value) => 
                dispatch(addOverallNote({...week, overallNote: value}))
            }
            value = {week.overallNote}>
            </TextInput>
        </View>
    )
}

export default AddNoteComponent;