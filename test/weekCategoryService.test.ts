import axios from 'axios';
import weekCategoryService from '../weekCategory/weekCategory.service


describe('tests for adding, deleting, and retrieving categories for a week', () => {

    test('that deleteCategory returns a promise with data in it when the function is passed correct data', async () => {

    })

    test('that deleteCategory returns eturns an error when the function is passed incorrect data', async () => {

    })

    test('that getCategories returns a promise with data in it when the function is passed correct data', async () => {
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

    test('that getCategories returns an error when the function is passed incorrect data', async () => {
        let returnValues;
        let err = new Error();
        axios.get = jest.fn().mockRejectedValue(err)
        await weekCategoryService.getCategories().then((arr: any) => {
            returnValues = arr;

        });
        expect(axios.get).toHaveBeenCalledTimes(1);
        expect(returnValues).toBe(err);
        expect(axios.get).toHaveBeenCalledWith('enter url');

    });

test('that addCategory returns a promise with data in it when the function is passed correct data', async () => {

})

test('that addCategory  returns an error when the function is passed incorrect data', async () => {

})
})