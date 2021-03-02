import React, { useEffect, useState } from 'react'

import { View, Text } from "react-native";
import { useSelector } from 'react-redux';
import { Associate } from '../associate/AssociateService';
import AssociateTableComponent from "../associate/AssociateTableComponent";
import BatchService from '../batches/BatchService';
import AddNoteComponent from "../batchWeek/AddNoteComponent";
import AddWeek from "../batchWeek/AddWeek/addWeek.component";
import WeekSelectionComponent from "../batchWeek/WeekSelectionComponent";
import { RootState } from '../store/store';
import WeekCategoryListContainer from '../weekCategories/WeekCategoryListContainer';
import BatchPageService from './BatchPageService';

function BatchPageComponent() {

    useEffect(() => {
    }, []);

    return (
        <View>
            <WeekSelectionComponent></WeekSelectionComponent>
            <AddWeek></AddWeek>
            <AddNoteComponent></AddNoteComponent>
            <WeekCategoryListContainer></WeekCategoryListContainer>
            <AssociateTableComponent></AssociateTableComponent>
        </View>

    );
}

export default BatchPageComponent