import axios from 'axios';
import { weekCategory } from './WeekCategory';

class weekCategoryService {
    private URI: string;
    constructor() {
        this.URI = 'https://localhost:3000/';
    }
    addCategory(weekcategory: weekCategory): Promise<weekCategory> {
        return axios.post(this.URI, weekcategory).then(result => result.data).catch(err => err);
    }
    getCategory(id: Number): Promise<weekCategory[]> {
        return axios.get(this.URI+'/'+id).then(result => result.data).catch(err => err);
    }
    deleteCategory(id: string): Promise<null> {
        console.log(id);
        return axios.delete(this.URI+'/'+id).then(result => null).catch(err => err);
    }
    
}

export default new weekCategoryService();


