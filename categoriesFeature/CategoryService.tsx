import axios from "axios";
import { Category } from './Category';

class categoryService {
    private URI: string;
    constructor() {
        this.URI = '';
    }

    // GET function for /categories
    getCategories(queryString?: string): Promise<Category[]> {
        return axios.get(this.URI, {params:{queryString}}).then((result) => {
            return result.data as Category[];
        })
    }

    // POST function for /categories
    addCategory(skill: string): Promise<Category> {
        return axios.post(this.URI, skill).then((result) => {
            return result.data.body as Category;
        })
    }

    // PUT function for /categories/{categoryId}
    updateCategory(category: Category): Promise<Category>{ 
        return axios.put(this.URI+'/'+category.categoryid).then((result) => {
            return result.data.body as Category;
        });
    }
}

export default new categoryService();
