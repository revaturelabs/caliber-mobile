//Shows associate name, technical status, note (editable)
import React from 'react';
import 'react-native';
import { View } from 'react-native';
import { associate, qcFeedback } from './associate.service';

interface AssociateProps {
    assoc: associate;
    qcFB: qcFeedback; 
}

function AssociateDetail(props: AssociateProps) {
    return (
        <View></View>
    );
}

export default AssociateDetail;