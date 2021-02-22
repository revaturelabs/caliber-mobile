import { UserInfo, UserInput } from '../user/user';
import Batch from '../batches/batch';
import { WeekInfo } from '../batchWeek/weekInfo';

export enum BatchActions {
	GetBatches = 'GET_BATCHES',
}
export enum UserActions {
	GetUser = 'GET_USER',
	LoginChange = 'CHANGE_LOGIN',
}

export enum BatchWeekActions {
	GetWeek = 'GET_WEEK',
	NoteChange = 'CHANGE_NOTE',
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

export interface BatchWeekAction extends AppAction {
	type: BatchWeekActions;
	payload: WeekInfo[];
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

export function addOverallNote(week: WeekInfo[]): BatchWeekAction {
	const action: BatchWeekAction = {
		type: BatchWeekActions.NoteChange,
		payload: week
	}
	return action;
}