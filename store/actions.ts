import Batch from '../batches/Batch';

export enum BatchActions {
    GetBatches = 'GET_BATCHES'
}

export interface AppAction {
    type: string;
    payload: any;
}

export interface BatchAction extends AppAction {
    type: BatchActions;
    payload: Batch[];   
}

export function getBatches(batches: Batch[]): BatchAction {
    const action: BatchAction = {
        type: BatchActions.GetBatches,
        payload: batches
    };
    return action;
}