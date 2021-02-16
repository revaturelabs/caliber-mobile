import axios from 'axios';
import weekCategoryService from '../categories/categoryService'
// import weekCategoryService from '../weekCategory/weekCategory.service

describe('tests for adding, deleting, and retrieving categories for a week', ()=>{

    test('that deleteCategory returns a promise with data in it when the function is passed correct data', async ()=>{

        let returnValues;
    
    let obj = {data:200};
    axios.get = jest.fn().mockResolvedValue(obj);
    await weekCategoryService.deleteCategory().then((returendMSG) => {
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
        await weekCategoryService.deleteCategory().then((returendMSG) => {
            returnValues = returendMSG;
        });
        expect(axios.get).toHaveBeenCalledTimes(1);
        expect(returnValues).toBe(obj.data);
        expect(axios.get).toHaveBeenCalledWith('');

    })

    test('that getCategories returns a promise with data in it when the function is passed correct data', async()=>{
        

    })

    test('that getCategories returns a promise with data in it when the function is passed incorrect data', async()=>{

    })

    test('that addCategory returns a promise with data in it when the function is passed correct data', async()=>{

    })

    test('that addCategory returns a promise with data in it when the function is passed incorrect data', async()=>{

    })
})