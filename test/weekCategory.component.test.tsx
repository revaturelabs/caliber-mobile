//import 'jsdom-global/register';
import  React from 'react'; 
import {View, Text} from 'react-native'; 

import 'jest-enzyme';
import '@testing-library/jest-dom';
import Enzyme from 'enzyme';
import { configure, shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import CategoryAdd from './testComp';


configure({ adapter: new Adapter() })



describe('tests for weekCategory.component', ()=>{
    test('that category displays correctly', ()=>{
       
        const wrapper =  shallow(<CategoryAdd/>); 
        expect(wrapper.debug().length).toBeGreaterThan(0);  
        console.log(wrapper.debug()); 
    });
    
    test('that the button calls deleteCategory from categoryService and refreshes list', () =>{
        const mockFunction = jest.fn();

        const wrapper =  shallow(<CategoryAdd/>); 
        console.log(wrapper.containsAllMatchingElements([<CategoryAdd />])); 
        // const instancePress = wrapper.instance;
        //  console.log(instancePress.toString());
        // expect(instancePress).toHaveBeenCalled();
        //  const fnCall = jest.spyOn(wrapper.instance,'myPress'); 
        // // expect(fnCall).toBeCalled();
        // console.log(fnCall);
        });

});