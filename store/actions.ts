import { UserInfo, UserInput } from '../user/user';
import Batch from '../batches/batch';
import { WeekCategoryState } from './store';
import { weekCategory } from '../WeekCategories/WeekCategory';
import {Category} from '../categories/Category';

export enum BatchActions {
	GetBatches = 'GET_BATCHES',
}
export enum UserActions {
	GetUser = 'GET_USER',
	LoginChange = 'CHANGE_LOGIN',
}
export enum WeekCategoryActions{
	DeleteWeekCategory = 'DELETE_WEEK_CATEGORY',
	AddWeekCategory = 'ADD_WEEK_CATETGORY',
	GetWeekCategories = 'GET_WEEK_CATEGORIES',
	ChangeWeekCategories = 'CHANGE_WEEK_CATEGORIES'
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


export function deleteWeekCategory(category: weekCategory): WeekCategoryAction {
	const action: WeekCategoryAction ={
		type: WeekCategoryActions.DeleteWeekCategory,
		payload:category
	};
	return action;
};

export function addWeekCategory(category: weekCategory): WeekCategoryAction {
	const action: WeekCategoryAction ={
		type: WeekCategoryActions.AddWeekCategory,
		payload:category
	};
	return action;
};

export function getWeekCategories(categories:Category[]): WeekCategoryAction {
	const action: WeekCategoryAction ={
		type: WeekCategoryActions.GetWeekCategories,
		payload:categories
	};
	return action;
};

export function ChangeCategories(categories: Category[]): WeekCategoryAction {
	const action: WeekCategoryAction ={
		type: WeekCategoryActions.ChangeWeekCategories,
		payload:categories
	};
	return action;
};