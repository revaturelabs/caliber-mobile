import React from 'react';
import 'react-native';
import 'jest-enzyme';
import '@testing-library/jest-dom';
import Enzyme, {shallow} from 'enzyme';

import BatchesComponent from '../../batches/batches.component';

describe('BatchesComponent Test(s)', () => {
    test('the component did mount', () => {
        const wrapper = Enzyme.mount(
            <BatchesComponent></BatchesComponent>
        )
      expect(wrapper).toMatchSnapshot()
expect(shallow(<BatchesComponent/>)).toMatchSnapshot();

    })
    
});