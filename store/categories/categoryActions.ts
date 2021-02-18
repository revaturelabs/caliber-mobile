import {Category} from '../../categories/category';

export enum CategoryActions {
    GetCategories = 'GET_CATEGORIES'
}

export interface AppAction {
    type: string;
    payload: any;
}

export interface CategoryAction<P> extends AppAction {
    type: CategoryActions;
    payload: P;
}

export function GetCategories(categories: Category[]): CategoryAction<Category[]> {
    const action: CategoryAction<Category[]> = {
        type: CategoryActions.GetCategories,
        payload: categories
    };
    return action;
}