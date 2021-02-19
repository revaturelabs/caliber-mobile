import React from 'react';

/**
 * Provides dropdowns to select the year, quarter, and batch name on the quality audit page. The
 * redux store should be updated with the batch we are currently looking at
 */
export default function BatchWeekSelectionComponent() {

    // Called on year picker change
    function onYearChange(itemValue: string | number, itemIndex: number) {
        
    }
    // Called on quarter picker change
    function onQuarterChange(itemValue: string | number, itemIndex: number) {

    }
    // Called on batch picker change
    function onBatchChange(itemValue: string | number, itemIndex: number) {

    }
    // Called on week tab change (this could also be another picker instead)
    function onWeekSelect(week: number) {

    }
    // Called on refresh button press (maybe this should be in the quality audit component?)
    function onRefreshPress() {

    }

    return (
        <></>
    );
}