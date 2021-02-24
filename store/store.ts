import { combineReducers, applyMiddleware, createStore, Store } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import batchReducer from './batchReducer';
import userReducer from './userReducer';
<<<<<<< HEAD
import WeekCategoryReducer from './WeekCategoryReducer'
import { AppAction } from './actions';
import Batch from '../batches/batch';
import { UserInput, UserInfo } from '../user/user';
import { weekCategory } from '../WeekCategories/WeekCategory';
=======
import categoryReducer from './categoriesFeature/CategoryReducer';
import {UserInput, UserInfo} from '../user/user'
import { Category } from '../categoriesFeature/Category';
import { AppAction } from './actions';
import Batch from '../batches/batch';
>>>>>>> e818fe89e932ffc5d7bc55cbbb44f54813d2068b

export interface BatchState {
	batches: Batch[];
}

export interface UserState {
	user: UserInfo;
	userLogin: UserInput;
}

<<<<<<< HEAD
export interface WeekCategoryState{
	weekCategories: weekCategory[];
	weekCategory: weekCategory;
}

export interface CaliberState extends UserState, BatchState, WeekCategoryState {}
=======
export interface CategoryState {
    categories: Category[];
}
export interface CaliberState extends UserState, CategoryState, BatchState {}
>>>>>>> e818fe89e932ffc5d7bc55cbbb44f54813d2068b
// <> is generics: Generic arguments allow us to define the type of a thing at runtime instead of when we write it,
// creating a reusable object.

//add your reducer to the object
const rootReducer = combineReducers({
	userReducer,
	batchReducer,
	WeekCategoryReducer
});

//user userSelector(state: RootState => state.yourReducer.yourPayload)
export type RootState = ReturnType<typeof rootReducer>;

const store: Store<RootState, AppAction> = createStore(
	rootReducer,
	composeWithDevTools(applyMiddleware(thunk))
);

export default store;
