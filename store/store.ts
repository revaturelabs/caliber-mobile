import { combineReducers, applyMiddleware, createStore, Store } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import batchReducer from './batchReducer';
import userReducer from './userReducer';
import { AppAction } from './actions';
import { UserInfo, UserInput } from '../user/user';
import { AssociateWithFeedback } from '../associate/AssociateService';
import QcWeek from '../batchWeek/QcWeek';
import WeekCategoryReducer from './WeekCategoryReducer';
import { Category } from '../categoriesFeature/Category';
import categoryReducer from './categoriesFeature/CategoryReducer';
import { WeekCategory } from '../weekCategories/weekCategory';
import weekReducer from './WeekReducer';
import Batch from '../batches/batch';

export interface BatchState {
  batch: Batch;
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
export interface AssociateState {
  associates: AssociateWithFeedback[];
}

export interface WeekCategoryState {
  weekCategories: Category[];
  weekCategory: WeekCategory;
}
export interface CategoryState {
  activeCat: Category[];
  staleCat: Category[];
  render: boolean;
}

export interface CategoryState {
  categories: Category[];
}

export interface CaliberState
  extends UserState,
    CategoryState,
    BatchState,
    WeekCategoryState,
    AssociateState,
    WeekState {}

//add your reducer to the object
const rootReducer = combineReducers({
  userReducer,
  batchReducer,
  weekReducer,
  WeekCategoryReducer,
  categoryReducer,
});

/**
 * Example of how to use ReducerState
 * let variableName = useSelector(state: RootState => state.reducerName.payloadName)
 */
export type ReducerState = ReturnType<typeof rootReducer>;

const store: Store<ReducerState, AppAction> = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
