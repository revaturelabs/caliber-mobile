import { mount} from "enzyme";
import React from 'react';
import AddWeek from '../../batchWeek/addWeek.component';

describe('Add New Week', () => {

  it('button click should add new week', () => {
    const wrapper = mount(<AddWeek />);
    const button = wrapper.find('button')
    button.simulate('click');
    expect(button).toHaveBeenCalled();
  });


});