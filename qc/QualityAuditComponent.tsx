import React from 'react';
import AddWeek from '../batchWeek/AddWeek/addWeek.component';
import WeekSelectionComponent from '../batchWeek/WeekSelectionComponent';

/**
 * The parent component for the QC Quality Audit Page; will conatin the selection of specific
 * batches and weeks, the table of associates with status and notes, and overall week status and
 * notes.
 */
export default function QualityAuditComponent() {
    return (
        <>
            <WeekSelectionComponent/>
            <AddWeek />
        </>
    );
}