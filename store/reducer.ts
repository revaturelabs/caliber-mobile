import { CaliberState } from './store';
import * as Actions from './actions';

import Batch from '../batches/batch';
import { AssociateWithFeedback } from '../associate/AssociateService';

export const initialState: CaliberState = {
    batches: [],
    associates: [],
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
        case Actions.AssociateActions.GetAssociates:
            newState.associates = action.payload as AssociateWithFeedback[];
            return newState;
        default:
            return state;
    }
}

export default reducer;