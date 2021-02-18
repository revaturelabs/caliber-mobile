import { combineReducers, createStore, Store } from 'redux';
import { AppAction } from './actions';
import userReducer from './userReducer';
import categoryReducer from './categories/categoryReducer';
import {UserInput, UserInfo} from '../user/user'
import { Category } from '../categories/Category';

export interface UserState {
    user: UserInfo;
    userLogin: UserInput;
}

export interface CategoryState {
    categories: Category[];
}
export interface CaliberState extends UserState, CategoryState {}
// <> is generics: Generic arguments allow us to define the type of a thing at runtime instead of when we write it,
// creating a reusable object.

//add your reducer to the object
const rootReducer = combineReducers({
    userReducer,
    categoryReducer
});


//user userSelector(state: RootState => state.yourReducer.yourPayload)
export type RootState = ReturnType<typeof rootReducer>

const store: Store<CaliberState, AppAction> = createStore(rootReducer);


export default store;
