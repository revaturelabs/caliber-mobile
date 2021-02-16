import * as Actions from './actions';
import { UserInfo, UserInput } from '../user/user';
import { CaliberState } from './store';

export const initialState: CaliberState = {
    user: new UserInfo(),
    loginUser: new UserInput(),
}

const userReducer = (state: CaliberState = initialState, action: Actions.AppAction): CaliberState => {
    const newState = {...state}; 

    switch (action.type) {    
        case Actions.UserActions.GetUser:
            newState.user = action.payload as UserInfo;
            newState.loginUser = new UserInput();
            return newState;
        case Actions.UserActions.LoginChange:
            newState.loginUser = action.payload as UserInput;
            return newState;
        default: 
            return state;
    }
}

export default userReducer;