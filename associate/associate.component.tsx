//Shows associate name, technical status, note (editable)
import React from 'react';
import 'react-native';
import { View } from 'react-native';
import AssociateDetail from './associate.detail';
import { Associate, QCFeedback } from './associate.service';

interface AssociateProps {
    assoc: Associate;
    qcFB: QCFeedback; 
}

function AssociateComponent(props: AssociateProps) {
    return (
        <View>
            <AssociateDetail associate = {props.assoc} qcFeedback = {props.qcFB} ></AssociateDetail>
        </View>
        
    );
}

export default AssociateComponent;