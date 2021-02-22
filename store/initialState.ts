import { UserInfo, UserInput } from "../user/user";
import { CaliberState } from "./store";
import { WeekInfo } from "../batchWeek/weekInfo";


//add your initial states here and import it in your reducer
export const initialState: CaliberState = {
    user: new UserInfo(),
    userLogin: new UserInput(),
    batches: [],
    week: new WeekInfo()
}