import WeekSelectionComponent from "../batchWeek/WeekSelectionComponent";
import { UserInfo, UserInput } from "../user/user";
import QcWeek from '../batchWeek/QcWeek';
import { CaliberState } from "./store";


//add your initial states here and import it in your reducer
export const initialState: CaliberState = {
    user: new UserInfo(),
    userLogin: new UserInput(),
    batches: [],
    weeks: [],
    selectedWeek: new QcWeek()
}