import { combineReducers, applyMiddleware, createStore, Store } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import batchReducer from './batchReducer';
import weekReducer from './WeekReducer';
import userReducer from './userReducer';
import { AppAction } from './actions';
import Batch from '../batches/batch';
import QcWeek from '../batchWeek/QcWeek';
import { UserInput, UserInfo } from '../user/user';

export interface BatchState {
	batches: Batch[];
}

export interface WeekState {
	weeks: QcWeek[];
	selectedWeek: QcWeek;
}

export interface UserState {
	user: UserInfo;
	userLogin: UserInput;
}

export interface CaliberState extends UserState, BatchState, WeekState {}

//add your reducer to the object
const rootReducer = combineReducers({
	userReducer,
	batchReducer,
	weekReducer
});

//user userSelector(state: RootState => state.yourReducer.yourPayload)
export type RootState = ReturnType<typeof rootReducer>;

const store: Store<RootState, AppAction> = createStore(
	rootReducer,
	composeWithDevTools(applyMiddleware(thunk))
);

export default store;
