import React, { useEffect, useState } from 'react';
import { ButtonGroup } from 'react-native-elements';
import { ScrollView } from 'react-native-gesture-handler';

/**
 * Provides a button group 
 */
export default function WeekSelectionComponent() {

    const [numberOfWeeks, setNumberOfWeeks] = useState(6);
    const [selectedIndex, setSelectedIndex] = useState(0);
    const [buttonLabels, setButtonLabels] = useState([] as string[]);

    useEffect(() => {
        // Initialize labels for each week to be displayed
        let labels: string[] = [];
        for(let i = 1; i <= numberOfWeeks; i++) {
            labels.push('Week '+i);
        }
        setButtonLabels(labels);
    }, []);

    // Called on week tab change (this could also be another picker instead)
    function onWeekSelect(weekIndex: number) {
        setSelectedIndex(weekIndex);
    }

    return (
        <ScrollView horizontal>
            <ButtonGroup
                onPress={onWeekSelect}
                selectedIndex={selectedIndex}
                buttons={buttonLabels}
            />
        </ScrollView>
    );
}