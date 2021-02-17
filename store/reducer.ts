import { CaliberState } from './store';
import * as Actions from './actions';

import Batch from '../batches/batch';

export const initialState: CaliberState = {
    batches: []
}

const reducer = (
    state: CaliberState = initialState,
    action: Actions.AppAction
): CaliberState => {
    const newState = { ...state };

    switch (action.type) {
        case Actions.BatchActions.GetBatches:
            newState.batches = action.payload as Batch[];
            return newState;
        default:
            return state;
    }
}

export default reducer;