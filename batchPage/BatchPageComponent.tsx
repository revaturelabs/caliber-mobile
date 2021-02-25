import React from 'react';

import { View, Text } from 'react-native';
import { Associate } from '../associate/AssociateService';
import AssociateTableComponent from '../associate/AssociateTableComponent';
import AddNoteComponent from '../batchWeek/AddNoteComponent';
import AddWeek from '../batchWeek/AddWeek/addWeek.component';
import WeekSelectionComponent from '../batchWeek/WeekSelectionComponent';
import weekCategoryList from '../weekCategories/WeekCategoryList';

function BatchPageComponent(props: any) {
  return (
    <View>
      <WeekSelectionComponent></WeekSelectionComponent>
      <AddWeek></AddWeek>
      <AddNoteComponent></AddNoteComponent>
      {weekCategoryList({ weekId: 0 })}
      <AssociateTableComponent
        assoc={[
          new Associate(),
          new Associate(),
          new Associate(),
          new Associate(),
        ]}></AssociateTableComponent>
    </View>
  );
}

export default BatchPageComponent;
