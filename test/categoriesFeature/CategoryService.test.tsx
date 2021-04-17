import axios from 'axios';
import { Category } from '../../categoriesFeature/Category';
import categoryService from '../../categoriesFeature/CategoryService';

describe('categoryService class', () => {
    test('getCategories returns proper data', async () => {
        let returnValues;
        let obj = {data: []};
        const token = '';
        axios.get = jest.fn().mockResolvedValue(obj);
        await categoryService.getCategories(token).then((arr) => {
            returnValues = arr;
        });
        expect(axios.get).toHaveBeenCalledTimes(1);
        expect(returnValues).toBe(obj.data);
    });
    
    test('addCategory returns proper data', async () => {
        let returnValues;
        let skill = 'skill'
        let token = '';
        let obj = {data: []};
        axios.post = jest.fn().mockResolvedValue(obj);
        await categoryService.addCategory(token,skill).then((result)=>{
            returnValues = result;
        });
        expect(axios.post).toHaveBeenCalledTimes(1);
        expect(returnValues).toBe(obj.data);
    });

    test('updateCategory returns proper data', async () => {
        let returnValues;
        let cat = new Category();
        cat.categoryid = 1;
        let obj = {data:[]};
        const token = '';
        axios.put = jest.fn().mockResolvedValue(obj);
        await categoryService.updateCategory(token,cat).then((result) => {
            returnValues = result;
        });
        expect(axios.put).toHaveBeenCalledTimes(1);
        expect(returnValues).toBe(obj.data);
    });
});



