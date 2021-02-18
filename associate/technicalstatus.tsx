//Shows the technical status of an associate/group
//Editable if provided with a setStatus function as a prop
import React from 'react';
import { Pressable } from 'react-native';
import { Icon } from 'react-native-elements';

interface TechnicalStatusProps {
    status: number;
    setStatus: Function;
}

export function TechnicalStatus(props: TechnicalStatusProps) {

    // Default to 'unknown' status
    let iconName: string = 'question';
    let iconColor: string = 'blue';

    // Using if-else instead of switch so this component can be reused for 
    // displaying the average 
    if(props.status >= 1 && props.status < 2) {
        iconName = 'frown';
        iconColor = 'red';
    } else if(props.status < 3) {
        iconName = 'meh';
        iconColor = 'yellow';
    } else if(props.status < 4) {
        iconName = 'smile';
        iconColor = 'green';
    }

    return (
        <Pressable
            onPress={props.setStatus()}>
            <Icon
                name={iconName}
                type='font-awesome'
                color={iconColor} />
        </Pressable>
    )
}