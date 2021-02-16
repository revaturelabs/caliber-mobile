import { combineReducers, createStore, Store } from 'redux';
import { AppAction } from './actions';
import userReducer from './userReducer';
import {UserInput, UserInfo} from '../user/user'

export interface UserState {
    user: UserInfo;
    userLogin: UserInput;
}
export interface CaliberState extends UserState {}
// <> is generics: Generic arguments allow us to define the type of a thing at runtime instead of when we write it,
// creating a reusable object.
const rootReducer = combineReducers({
    userReducer
});

const store: Store<CaliberState, AppAction> = createStore(rootReducer);


export default store;
