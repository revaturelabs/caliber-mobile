import React from 'react';
import { View, TextInput, Text } from 'react-native';
import { RootState } from '../store/store';
import { useDispatch, useSelector } from 'react-redux';
import { addOverallNote } from '../store/actions';

function AddNoteComponent() {
  const dispatch = useDispatch();
  const week = useSelector(
    (state: RootState) => state.weekReducer.selectedWeek
  );

  return (
    <View>
      <Text>Overall Note</Text>
      <TextInput
        multiline
        onChangeText={(value) =>
          dispatch(addOverallNote({ ...week, note: value }))
        }
        value={week.note}></TextInput>
      {/* TODO: add overall technical status */}
    </View>
  );
}

export default AddNoteComponent;
