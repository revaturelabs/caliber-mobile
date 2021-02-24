import * as Actions from './actions';
import { UserInfo, UserInput } from '../user/user';
import { CaliberState } from './store';
import { initialState } from './initialState';

const userReducer = (
    state: CaliberState = initialState,
    action: Actions.AppAction
): CaliberState => {
    const newState = { ...state };

    switch (action.type) {
        case Actions.UserActions.GetUser:
            newState.user = action.payload as UserInfo;
            newState.userLogin = new UserInput();
            return newState;
        case Actions.UserActions.LoginChange:
            newState.userLogin = action.payload as UserInput;
            return newState;
        default:
            return state;
    }
};

export default userReducer;
