import { UserInfo, UserInput } from '../user/user';

export enum UserActions {
    GetUser = 'GET_USER',
    LoginChange = 'CHANGE_LOGIN'
}

export interface AppAction {
    type: string;
    payload: any;
}

export interface UserAction<P> extends AppAction {
    type: UserActions;
    payload: P;
}

//info of the user that is logged in
export function getUser(user: UserInfo): UserAction<UserInfo> {
    const action: UserAction<UserInfo> = {
        type: UserActions.GetUser,
        payload: user
    };
    return action;
}

//user input
export function loginChange(user: UserInput): UserAction<UserInput> {
    const action: UserAction<UserInput> = {
        type: UserActions.LoginChange,
        payload: user
    };
    return action;
}
