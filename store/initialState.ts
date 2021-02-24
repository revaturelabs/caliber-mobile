import { Category } from "../categoriesFeature/Category";
import { UserInfo, UserInput } from "../user/user";
import { weekCategory } from "../WeekCategories/WeekCategory";
import { CaliberState } from "./store";


//add your initial states here and import it in your reducer
export const initialState: CaliberState = {
    user: new UserInfo(),
    userLogin: new UserInput(),
    batches: [],
<<<<<<< HEAD
    weekCategory: new weekCategory(),
    weekCategoires: []
=======
    categories: []
>>>>>>> e818fe89e932ffc5d7bc55cbbb44f54813d2068b
}