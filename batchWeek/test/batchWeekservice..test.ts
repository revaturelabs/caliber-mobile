/**
 * @jest-environment jsdom
 */

import axios from 'axios';
import batchWeekService, { QcNote, QcWeek} from '../batchWeekService';

let returnValues: any;
let pathToBatch: string;
let pathToWeek: string;
let obj: any;
let batchId: string;
let week: number;

const URI = 'http://local:3000/';

describe('tesing batchWeek service ...', () => {

    beforeEach(
        () => {
           
            pathToBatch = 'batches/batch12';
            pathToWeek ='batches/batch12/weeks/3'
            obj = {data: []};
            batchId = 'batch12';
            week = 3;
        }
    );

    test('getBatchWeekNotes returns a promise with data in it.', async ()=>{

        axios.get = jest.fn().mockResolvedValue(obj);
        await batchWeekService.getBatchWeekNotes(batchId, week).then((arr) => {
            returnValues = arr;
        });
        expect(axios.get).toHaveBeenCalledTimes(1);
        expect(returnValues).toBe(obj.data);
        expect(axios.get).toHaveBeenCalledWith(URI + pathToBatch+ '/weeks');
    });

    test('getBatchWeekNote returns a promise with data in it.', async ()=>{
        axios.get = jest.fn().mockResolvedValue(obj);
        await batchWeekService.getBatchWeekNotes(batchId, week).then((arr) => {
            returnValues = arr;
        });
        expect(axios.get).toHaveBeenCalledTimes(1);
        expect(returnValues).toBe(obj.data);
        expect(axios.get).toHaveBeenCalledWith(URI + pathToBatch+ '/' + pathToWeek);
    });

    test('addNewQcNote should return null when successfully updated', () => {
        let obj = {data: null};
        let qn1 = new QcNote();
        let qn2 = new QcNote();
        axios.post = jest.fn((URI + pathToWeek, [qn1, qn2] ) => {return null }); 
        expect(axios.post).toBeNull;
    });

    test('addNewQcWeek should return null when successfully updated ', () => {

        let obj = {data: null};
        let qw = new QcWeek;
        axios.post= jest.fn((URI + pathToWeek , qw) => { return null});
        expect(axios.post).toBeNull;
    
    })

})










