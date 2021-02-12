import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import {Text} from 'react-native';
import {Sample} from '../test/sample';


import SampleComponent from '../test/sample.component';

test('the name displays correctly', () => {
  const sample = new Sample();
  sample.name = 'test';
  sample.password = 'password';
  
  const wrapper = Enzyme.mount(
      <SampleComponent data={sample}></SampleComponent>
  );
  const name = wrapper.findWhere((node) => {
      //console.log(node.prop('testID'));
      return node.prop('testID') === 'name'
  });
  
  expect(name.first().text()).toBe('test');
}