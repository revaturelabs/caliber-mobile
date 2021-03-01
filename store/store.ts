import { combineReducers, applyMiddleware, createStore, Store } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import batchReducer from './batchReducer';
import weekReducer from './WeekReducer';
import userReducer from './userReducer';
<<<<<<< HEAD
import { AppAction } from './actions';
import { UserInfo, UserInput } from '../user/user';
import { Category } from '../categoriesFeature/Category';
import categoryReducer from './categoriesFeature/CategoryReducer';
=======
import Batch from '../batches/Batch';
import { AppAction } from './actions';
import { UserInfo, UserInput } from '../user/user';
import { AssociateWithFeedback } from '../associate/AssociateService';
import QcWeek from '../batchWeek/QcWeek';
import WeekCategoryReducer from './WeekCategoryReducer';
import { Category } from '../categoriesFeature/Category';
import categoryReducer from './categoriesFeature/CategoryReducer';
import { WeekCategory } from '../weekCategories/weekCategory';

export interface BatchState {
  batch: Batch;
  batches: Batch[];
}

export interface WeekState {
  weeks: QcWeek[];
  selectedWeek: QcWeek;
}
>>>>>>> bad97080de8e30c4b5848c558ffffb0255b92b2c

export interface UserState {
  user: UserInfo;
  userLogin: UserInput;
}
export interface AssociateState {
  associates: AssociateWithFeedback[];
}
export interface CaliberState extends UserState, BatchState, AssociateState {}

export interface WeekCategoryState {
  weekCategories: Category[];
  weekCategory: WeekCategory;
}
<<<<<<< HEAD
export interface CategoryState {
	activeCat: Category[];
	staleCat: Category[];
}
export interface CaliberState extends UserState, CategoryState { }

export interface CaliberState
	extends UserState,
	CategoryState { }

export interface CaliberState
	extends UserState,
	CategoryState { }
// <> is generics: Generic arguments allow us to define the type of a thing at runtime instead of when we write it,
// creating a reusable object.

export interface CaliberState extends UserState, CategoryState { }

//add your reducer to the object
const rootReducer = combineReducers({
	userReducer,
	batchReducer,
	categoryReducer,
=======

export interface CaliberState
  extends UserState,
    BatchState,
    WeekCategoryState {}

export interface CategoryState {
  categories: Category[];
}
export interface CaliberState
  extends UserState,
    CategoryState,
    BatchState,
    WeekCategoryState {}
// <> is generics: Generic arguments allow us to define the type of a thing at runtime instead of when we write it,
// creating a reusable object.

export interface CaliberState extends UserState, BatchState, WeekState {}

//add your reducer to the object
const rootReducer = combineReducers({
  userReducer,
  batchReducer,
  weekReducer,
  WeekCategoryReducer,
  categoryReducer,
>>>>>>> bad97080de8e30c4b5848c558ffffb0255b92b2c
});

/**
 * Example of how to use ReducerState
 * let variableName = useSelector(state: RootState => state.reducerName.payloadName)
 */
export type ReducerState = ReturnType<typeof rootReducer>;

const store: Store<ReducerState, AppAction> = createStore(
<<<<<<< HEAD
	rootReducer,
	composeWithDevTools(applyMiddleware(thunk))
=======
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
>>>>>>> bad97080de8e30c4b5848c558ffffb0255b92b2c
);

export default store;