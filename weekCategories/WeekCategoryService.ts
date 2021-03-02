import axios from 'axios';
import { weekCategory } from './WeekCategory';

class weekCategoryService {
    private URI: string;
    constructor() {
        this.URI = 'https://localhost:3000/';
    }

    /**
    * Display a list of current categories for the week and a button to add categories to the week
    * 
    * @param weekCategory the added weekCategory
    * @return the category that was added
    */
    addCategory(weekcategory: weekCategory): Promise<weekCategory> {
        return axios.post(this.URI, weekcategory).then(result => result.data).catch(err => err);
    }
     
    /**
    * Display a list of current categories for the week and a button to add categories to the week
    * 
    * @param number the id of the week
    * @return an array of all categories for a given week
    */
    getCategory(weekid: number): Promise<weekCategory[]> {
        return axios.get(this.URI+'/'+weekid).then(result => result.data).catch(err => err);
    }
    
    /**
    * Remove the given category from a list
    * 
    * @param  string the id of the category
    * @return nothing
    */
    deleteCategory(id: string): Promise<null> {
        console.log(id);
        return axios.delete(this.URI+'/'+id).then(result => null).catch(err => err);
    }
    
}

export default new weekCategoryService();


