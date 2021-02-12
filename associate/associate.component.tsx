//Shows associate name, technical status, note (editable)
import React from 'react';
import 'react-native';
import { View } from 'react-native';
import { Associate, qcFeedback } from './associate.service';

interface AssociateProps {
    assoc: Associate;
    qcFB: qcFeedback; 
}

function AssociateComponent(props: AssociateProps) {
    return (
        <View></View>
    );
}

export default AssociateComponent;