import { combineReducers, applyMiddleware, createStore, Store } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import batchReducer from './batchReducer';
import userReducer from './userReducer';
import { AppAction, AssociateActions } from './actions';
import Batch from '../batches/batch';
import { UserInfo, UserInput } from '../user/user';
import { AssociateWithFeedback } from '../associate/AssociateService';

export interface BatchState {
	batches: Batch[];
}

export interface UserState {
	user: UserInfo;
	userLogin: UserInput;
}
export interface AssociateState {
	associates: AssociateWithFeedback[];
}

export interface RerenderState {
	rerender: number;
}
export interface CaliberState extends UserState, BatchState,AssociateState,RerenderState {}
// <> is generics: Generic arguments allow us to define the type of a thing at runtime instead of when we write it,
// creating a reusable object.

//add your reducer to the object
const rootReducer = combineReducers({
	userReducer,
	batchReducer,
});

//user userSelector(state: RootState => state.yourReducer.yourPayload)
export type RootState = ReturnType<typeof rootReducer>;

const store: Store<RootState, AppAction> = createStore(
	rootReducer,
	composeWithDevTools(applyMiddleware(thunk))
);

export default store;
