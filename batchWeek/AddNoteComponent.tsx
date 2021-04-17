import React from 'react';
import { View, TextInput, Text } from 'react-native';
import { ReducerState } from '../store/store';
import { useDispatch, useSelector } from 'react-redux';
import { addOverallNote } from '../store/actions';
import style from '../global_styles'

function AddNoteComponent() {
  const dispatch = useDispatch();
  const week = useSelector(
    (state: ReducerState) => state.weekReducer.selectedWeek
  );

  return (
    <View>
      <Text>Overall Note</Text>
      <TextInput
        multiline
        placeholder = "Put your overall batch note here"
        style = {style.overallText}
        onChangeText={(value) =>
          dispatch(addOverallNote({ ...week, note: value }))
        }
        value={week.note}></TextInput>
      {/* TODO: add overall technical status */}
    </View>
  );
}

export default AddNoteComponent;
