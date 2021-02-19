//Shows associate name, technical status, note (editable)
import React, { useState } from 'react';
import 'react-native';
import { Associate, QCFeedback } from './associate.service';

interface AssociateProps {
    associate: Associate;
    qcFeedback: QCFeedback; 
}

function AssociateDetail(props: AssociateProps) {

    //Using a state to store the current qc note
    //This should be initialized to the correct Associate's current feedback, if they have one
    const [qcNote, setQcNote] = useState(props.qcFeedback.qcNote);
    const [qcTechnicalStatus, setQcTechnicalStatus] = useState(props.qcFeedback.qcTechnicalStatus);

    function onTextInput(text: string) {

    }

    return (
        <></>
    );
}

export default AssociateDetail;