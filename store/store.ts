import { applyMiddleware, createStore, Store } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

import reducer from './reducer';
import { AppAction } from './actions';
import Batch from '../batches/batch';

export interface BatchState {
    batches: Batch[];
}

export interface CaliberState
    extends BatchState {}

const store: Store<BatchState, AppAction> = createStore(reducer, composeWithDevTools(
    applyMiddleware(thunk),)
);

export default store;