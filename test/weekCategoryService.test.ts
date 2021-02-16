import axios from 'axios';
import weekCategoryService from '../weekCategory/weekCategory.service';

// Change Data at will please
describe('tests for adding, deleting, and retrieving categories for a week', async () => {






    test('that deleteCategory returns a promise with data in it when the function is passed incorrect data', async () => {

        let returnValues;
        let obj = null;
        axios.delete = jest.fn().mockResolvedValue(obj);
        await weekCategoryService.deleteCategory().then((returendMSG: any) => {
            returnValues = returendMSG;
        });
        expect(axios.delete).toHaveBeenCalledTimes(1);
        expect(returnValues).toBe(obj);
        expect(axios.delete).toHaveBeenCalledWith('enter url');
    });
    test('that deleteCategory returns an error when the function is passed incorrect data', async () => {

        let returnValues;

        let obj = { error:'Error' };
        axios.delete = jest.fn().mockResolvedValue(obj);
        await weekCategoryService.deleteCategory().then((returendMSG: any) => {
            returnValues = returendMSG;
        });
        expect(axios.delete).toHaveBeenCalledTimes(1);
        expect(returnValues).toBe(obj.error);
        expect(axios.delete).toHaveBeenCalledWith('enter url');
    });

    //Note: getCategories either returns an empty array or an array with categories inside of
    test('that getCategories returns a promise with data in it', async () => {
        let returnValues;
        let obj = { data: [] };
        axios.get = jest.fn().mockReturnValue(obj);
        await weekCategoryService.getCategories().then((arr: any) => {
            returnValues = arr;
        });
        expect(axios.get).toHaveBeenCalledTimes(1);
        expect(returnValues).toBe(obj.data);
        expect(axios.get).toHaveBeenCalledWith('enter url');
    });


    test('that addCategory returns a promise with data in it when the function is passed correct data', async () => {

    });

    test('that addCategory returns an error when the function is passed incorrect data', async () => {

    });
});