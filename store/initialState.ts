import { Category } from "../categoriesFeature/Category";
import { UserInfo, UserInput } from "../user/user";
import { weekCategory } from "../weekCategories/weekCategory";
import { CaliberState } from "./store";


//add your initial states here and import it in your reducer
export const initialState: CaliberState = {
    user: new UserInfo(),
    userLogin: new UserInput(),
    batches: [],
    weekCategory: new weekCategory(),
    weekCategories: [{categoryid: 3, skill: 'React Native', active: true},{categoryid: 4, skill: 'Redux', active: true},{categoryid: 5, skill: '5', active: true},{categoryid: 6, skill: '6', active: true},{categoryid: 7, skill: '7', active: true}],
    categories: [{ categoryid: 0, skill: 'React', active: true }, { categoryid: 1, skill: 'TypeScript', active: true }]
}