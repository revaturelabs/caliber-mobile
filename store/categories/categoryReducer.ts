import { Category } from "../../categories/Category";
import { CaliberState } from "../store"
import { initialState } from "../userReducer";
import * as Actions from './CategoryActions';

const categoryReducer = (state: CaliberState = initialState, action: Actions.AppAction): CaliberState => {
    const newState = {...state}; 

    switch (action.type) {    
        case Actions.CategoryActions.GetCategories:
            newState.categories = action.payload as Category[];
            return newState;
        default: 
            return state;
    }
}
export default categoryReducer;