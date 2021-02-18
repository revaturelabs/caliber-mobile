//Shows associate name, technical status, note (editable)

import React, { useState } from 'react';
import 'react-native';
import { Pressable, View } from 'react-native';
import { Text, Input, Button, Icon } from 'react-native-elements';
import associateService, { Associate, QCFeedback } from './associateService';

interface AssociateProps {
    associate: Associate;
    qcFeedback: QCFeedback;
}

function AssociateDetail(props: AssociateProps) {
    /**
     * Using states to store the current qc note/technical status: we can view multiple associate's
     * notes at once, so we should DEFINITELY not be using the redux store
     * This should be initialized to the correct Associate's current feedback, if they have one
     */
    const [qcNote, setQcNote] = useState(props.qcFeedback.qcNote);
    const [qcTechnicalStatus, setQcTechnicalStatus] = useState(props.qcFeedback.qcTechnicalStatus);

    //Should we be able to view their note?
    const [viewNote, setViewNote] = useState(false);

    /**
     * Icon manager(switches the icon based on the value of the technical status);
     */
    let iconName: string = 'question';
    let iconColor: string = 'blue';
    if (qcTechnicalStatus >= 1 && qcTechnicalStatus < 2) {
        iconName = 'frown';
        iconColor = 'red';
    } else if (qcTechnicalStatus < 3) {
        iconName = 'meh';
        iconColor = 'yellow';
    } else if (qcTechnicalStatus < 4) {
        iconName = 'smile';
        iconColor = 'green';
    }


    /**
     * When the Technical Status component is pressed, should cycle through 0-4
     *  Update both the state and the database.
    */
    function cycleTechnicalStatus() {
        let newStatus = qcTechnicalStatus + 1;
        if (newStatus > 4) {
            newStatus = 0;
        }
        setQcTechnicalStatus(newStatus);
        associateService.updateAssociate(props.qcFeedback, { 'qcStatus': newStatus });
    }

    return (
        <View>
            <Text testID='firstName'>{props.associate.firstName}</Text>
            <Text testID='lastName'> {props.associate.lastName}</Text>
            <Pressable
                onPress={cycleTechnicalStatus}>
                <Icon
                    name={iconName}
                    type='font-awesome'
                    color={iconColor} />
            </Pressable>
            <Button
                icon={
                    <Icon
                        name={viewNote ? 'chevron-down' : 'chevron-left'}
                        type='fontawesome' />
                }
                onPress={() => setViewNote(true)} />
            {viewNote && <Input
                label='Note from QC'
                placeholder={qcNote}
                multiline
                numberOfLines={4}
                scrollEnabled
                spellCheck={true}
                onChangeText={text => setQcNote(text)}
                testID='qcNote' />}
            {viewNote && <Button
                icon={
                    <Icon
                        name='save'
                        type='fontawesome' />
                }
            //onPress={() => associateService.updateAssociate({'qcNote': qcNote})}
            />
            }
        </View>
    );
}

export default AssociateDetail;