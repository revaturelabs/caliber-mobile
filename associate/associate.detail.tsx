//Shows associate name, technical status, note (editable)
import React, { useState } from 'react';
import 'react-native';
import { View } from 'react-native';
import { Associate, QCFeedback } from './associate.service';

interface AssociateProps {
    associate: Associate;
    qcFeedback: QCFeedback; 
}

function AssociateDetail(props: AssociateProps) {

    //Using a state to store the current qc note
    //This should be initialized to the correct Associate's current note, if they have one
    const [qcNote, setQcNote] = useState(props.qcFeedback.qcNote);

    function onTextInput(text: string) {

    }

    return (
        <View></View>
    );
}

export default AssociateDetail;