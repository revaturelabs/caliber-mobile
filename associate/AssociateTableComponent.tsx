//Shows associate name, technical status, note (editable)
import React from 'react';
import 'react-native';
import { View,Text } from 'react-native';
import style from '../global_styles';
import AssociateDetail from './AssociateDetail';
import { Associate, QCFeedback } from './AssociateService';

interface AssociateProps {
    assoc: Associate;
    qcFB: QCFeedback;
}


function AssociateTableComponent(props: AssociateProps) {
    return (
        <View>
            <Text style = {style.assocheader}>Associates:</Text>
            <AssociateDetail associate={new Associate()} qcFeedback={new QCFeedback()}></AssociateDetail>
            <AssociateDetail associate={new Associate()} qcFeedback={new QCFeedback()}></AssociateDetail>
            <AssociateDetail associate={new Associate()} qcFeedback={new QCFeedback()}></AssociateDetail>
            <AssociateDetail associate={new Associate()} qcFeedback={new QCFeedback()}></AssociateDetail>
            <AssociateDetail associate={new Associate()} qcFeedback={new QCFeedback()}></AssociateDetail>
            <AssociateDetail associate={new Associate()} qcFeedback={new QCFeedback()}></AssociateDetail>
            <AssociateDetail associate={new Associate()} qcFeedback={new QCFeedback()}></AssociateDetail>
        </View>

    );
}

export default AssociateTableComponent;