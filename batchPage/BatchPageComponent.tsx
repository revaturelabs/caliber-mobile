import React, { useEffect } from 'react';

import { View, Text } from 'react-native';
import { useSelector } from 'react-redux';
import { Associate } from '../associate/AssociateService';
import AssociateTableComponent from '../associate/AssociateTableComponent';
import AddNoteComponent from '../batchWeek/AddNoteComponent';
import AddWeek from '../batchWeek/AddWeek/addWeek.component';
import WeekSelectionComponent from '../batchWeek/WeekSelectionComponent';
import { ReducerState } from '../store/store';
import weekCategoryList from '../weekCategories/weekCategoryList';
import BatchPageService from './BatchPageService';

function BatchPageComponent() {
  let batch = useSelector((state: ReducerState) => state.batchReducer.batch);

  useEffect(() => {}, []);

  return (
    <View>
      <WeekSelectionComponent></WeekSelectionComponent>
      <AddWeek></AddWeek>
      {weekCategoryList({ weekId: 0 })}
      <AddNoteComponent></AddNoteComponent>
      <AssociateTableComponent></AssociateTableComponent>
    </View>
  );
}

export default BatchPageComponent;
