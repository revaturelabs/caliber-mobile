import axios from 'axios';
import weekCategoryService from '../weekCategory/weekCategory.service';

// Change Data at will please
describe('tests for adding, deleting, and retrieving categories for a week', async() => {

        let returnValues;
    
    let obj = {data:200};
    axios.get = jest.fn().mockResolvedValue(obj);
    await weekCategoryService.deleteCategory().then((returendMSG:any) => {
        returnValues = returendMSG;
    });
    expect(axios.get).toHaveBeenCalledTimes(1);
    expect(returnValues).toBe(obj);
    expect(axios.get).toHaveBeenCalledWith('');


    })

    test('that deleteCategory returns a promise with data in it when the function is passed incorrect data', async ()=>{
       
        let returnValues;
    
        let obj = {data:400};
        axios.get = jest.fn().mockResolvedValue(obj);
        await weekCategoryService.deleteCategory().then((returendMSG:any) => {
            returnValues = returendMSG;
        });
        expect(axios.get).toHaveBeenCalledTimes(1);
        expect(returnValues).toBe(obj.data);
        expect(axios.get).toHaveBeenCalledWith('');

    test('that deleteCategory returns an error when the function is passed incorrect data', async () => {

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