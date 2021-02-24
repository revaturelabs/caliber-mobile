import { UserInfo, UserInput } from '../user/user';
import Batch from '../batches/Batch';

export enum BatchActions {
	GetBatches = 'GET_BATCHES',
	ChangeBatch = 'CHANGE_BATCH'
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
	payload: Batch | Batch[];
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

export function changeBatch(batch: Batch): BatchAction {
	const action: BatchAction = {
		type: BatchActions.ChangeBatch,
		payload: batch,
	};
	return action;
}