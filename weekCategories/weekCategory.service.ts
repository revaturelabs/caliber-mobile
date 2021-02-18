import axios from 'axios';
import { WeekCategory } from './weekCategory';

class WeekCategoryService {
    private URI: string;
    constructor() {
        this.URI = 'https://localhost:3000/';
    }
    addCategory(weekcategory: WeekCategory): Promise<WeekCategory> {
        return axios.post(this.URI, weekcategory).then(result => result.data).catch(err => err);
    }

    getCategory(id: string): Promise<WeekCategory> {
        return axios.get(this.URI+'/'+id).then(result => result.data).catch(err => err);
    }
    deleteCategory(id: string): Promise<null> {
        console.log(id);
        return axios.delete(this.URI+'/'+id, {withCredentials: true}).then(_result => null)
    }
    
}

export default new WeekCategoryService();


