import { UserInfo, UserInput } from '../user/user';
import Batch from '../batches/batch';
import { WeekCategoryState } from './store';
import { weekCategory } from '../WeekCategories/WeekCategory';

export enum BatchActions {
	GetBatches = 'GET_BATCHES',
}
export enum UserActions {
	GetUser = 'GET_USER',
	LoginChange = 'CHANGE_LOGIN',
}
export enum WeekCategoryActions{
	DeleteCategory = 'DELETE_CATEGORY',
	AddCategory = 'ADD_CATETGORY',
	GetCategories = 'GET_CATEGORIES',
	ChangeCategories = 'CHANGE_CATEGORIES'
}

export interface AppAction {
	type: string;
	payload: any;
}

export interface UserAction<P> extends AppAction {
	type: UserActions;
	payload: P;
}

export interface BatchAction extends AppAction {
	type: BatchActions;
	payload: Batch[];
}

export interface WeekCategoryAction extends AppAction{
	type:WeekCategoryActions;
	payload:weekCategory[] | weekCategory;
}

//info of the user that is logged in
export function getUser(user: UserInfo): UserAction<UserInfo> {
	const action: UserAction<UserInfo> = {
		type: UserActions.GetUser,
		payload: user,
	};
	return action;
}

//user input
export function loginChange(user: UserInput): UserAction<UserInput> {
	const action: UserAction<UserInput> = {
		type: UserActions.LoginChange,
		payload: user,
	};
	return action;
}

export function getBatches(batches: Batch[]): BatchAction {
	const action: BatchAction = {
		type: BatchActions.GetBatches,
		payload: batches,
	};
	return action;
}


export function deleteCategory(category: weekCategory): WeekCategoryAction {
	const action: WeekCategoryAction ={
		type: WeekCategoryActions.DeleteCategory,
		payload:category
	};
	return action;
};

export function addCategory(category: weekCategory): WeekCategoryAction {
	const action: WeekCategoryAction ={
		type: WeekCategoryActions.AddCategory,
		payload:category
	};
	return action;
};

export function getCategories(categories: weekCategory[]): WeekCategoryAction {
	const action: WeekCategoryAction ={
		type: WeekCategoryActions.GetCategories,
		payload:categories
	};
	return action;
};

export function ChangeCategories(categories: weekCategory[]): WeekCategoryAction {
	const action: WeekCategoryAction ={
		type: WeekCategoryActions.ChangeCategories,
		payload:categories
	};
	return action;
};