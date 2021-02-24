import WeekSelectionComponent from "../batchWeek/WeekSelectionComponent";
import { Category } from "../categoriesFeature/Category";
import { UserInfo, UserInput } from "../user/user";
import QcWeek from '../batchWeek/QcWeek';
import { weekCategory } from "../weekCategories/WeekCategory";
import { CaliberState } from "./store";


//add your initial states here and import it in your reducer
export const initialState: CaliberState = {
    user: new UserInfo(),
    userLogin: new UserInput(),
    batches: [],
    weeks: [],
    selectedWeek: new QcWeek(),
    weekCategory: new weekCategory(),
    weekCategories: [],
    categories: []
}