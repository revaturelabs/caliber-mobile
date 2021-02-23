import { UserInfo, UserInput } from '../user/user';
import Batch from '../batches/batch';
import QcWeek from '../batchWeek/QcWeek';

export enum BatchActions {
	GetBatches = 'GET_BATCHES',
}
export enum WeekActions {
	GetWeeks = 'GET_WEEKS',
	ChangeSelectedWeek = 'CHANGE_SELECTED_WEEK'
}
export enum UserActions {
	GetUser = 'GET_USER',
	LoginChange = 'CHANGE_LOGIN',
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

export interface WeekAction extends AppAction {
	type: WeekActions;
	payload: QcWeek | QcWeek[];
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

export function getWeeks(weeks: QcWeek[]): WeekAction {
	const action: WeekAction = {
		type: WeekActions.GetWeeks,
		payload: weeks
	};
	return action;
}

export function changeSelectedWeek(week: QcWeek): WeekAction {
	const action: WeekAction = {
		type: WeekActions.ChangeSelectedWeek,
		payload: week
	};
	return action;
}