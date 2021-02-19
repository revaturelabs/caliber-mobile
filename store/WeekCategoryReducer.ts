import { weekCategory } from '../WeekCategories/WeekCategory';
import * as Actions from './actions';

import { CaliberState } from './store';

export const initialState: CaliberState = {
    weekCategory: new weekCategory(),
    weekCategoires: []
};

const WeekCategoryReducer = (state: CaliberState = initialState, action: Actions.AppAction): CaliberState => {
    const newState = { ...state };

    switch (action.type) {
        case Actions.WeekCategoryActions.AddCategory:
            newState.weekCategory = action.payload as weekCategory;
            return newState;
        case Actions.WeekCategoryActions.DeleteCategory:
            newState.weekCategory = action.payload as weekCategory;
            return newState;
        case Actions.WeekCategoryActions.GetCategories:
            newState.weekCategoires = action.payload as weekCategory[];
            return newState;
        case Actions.WeekCategoryActions.ChangeCategories:
            newState.weekCategoires = action.payload as weekCategory[];
            return newState;
        default:
            return state;
    }
}

export default WeekCategoryReducer;