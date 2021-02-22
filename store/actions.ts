import { UserInfo, UserInput } from '../user/user';
import Batch from '../batches/batch';
import { AssociateWithFeedback } from '../associate/AssociateService';

export enum BatchActions {
	GetBatches = 'GET_BATCHES',
}
export enum UserActions {
	GetUser = 'GET_USER',
	LoginChange = 'CHANGE_LOGIN',
}


export enum AssociateActions {
    GetAssociates = 'GET_ASSOCIATES',
}

export enum RerenderActions {
    ForceRerender = "ForceRerender"
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

export interface AssociateAction extends AppAction {
	type: AssociateActions;
	payload: AssociateWithFeedback[];
}

export interface RerenderAction extends AppAction {
	type: RerenderActions;
	payload:Number;
}

/**
 * Set the associates in the state to whatever is currently displaying in the UI.
 * @param associates 
 */
export function getAssociates(associates: AssociateWithFeedback[]): AssociateAction {
	const action: AssociateAction = {
		type: AssociateActions.GetAssociates,
		payload: associates,
	};
	return action;
}

/**
 * ForceRerender of UI
 * @param associates 
 */
export function forceRerender(number:number): RerenderAction {
	const action: RerenderAction = {
		type: RerenderActions.ForceRerender,
		payload: number,
	};
	return action;
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
