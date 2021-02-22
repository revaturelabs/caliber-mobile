import { CaliberState } from './store';
import { initialState } from './initialState';
import * as Actions from './actions';
import WeekInfo  from '../batchWeek/weekInfo';

const batchWeekReducer = (
    state: CaliberState = initialState,
    action: Actions.AppAction
): CaliberState => {
    const newState = { ...state };

    switch (action.type) {
        /* case Actions.BatchWeekActions.GetWeek:
            newState.week = action.payload as WeekInfo[];
            return newState; */
        case Actions.BatchWeekActions.NoteChange:
            newState.week = action.payload as WeekInfo[];
            return newState;
        default:
            return state;
    }
}

export default batchWeekReducer;