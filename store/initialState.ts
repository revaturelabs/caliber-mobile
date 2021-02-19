import { UserInfo, UserInput } from "../user/user";
import { weekCategory } from "../WeekCategories/WeekCategory";
import { CaliberState } from "./store";


//add your initial states here and import it in your reducer
export const initialState: CaliberState = {
    user: new UserInfo(),
    userLogin: new UserInput(),
    batches: [],
    weekCategory: new weekCategory(),
    weekCategoires: []
}