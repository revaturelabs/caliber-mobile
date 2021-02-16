/**
 * @jest-environment jsdom
 */
import React from 'react';
import Enzyme from 'enzyme';
import AddNoteComponent from '../addNote.component';
import { Button } from 'react-native';

test('test adding an overall note', () => {
    const wrapper = Enzyme.mount(<AddNoteComponent />);
    const mockFn = jest.fn();
    
    const tree = Enzyme.shallow(
        <Button title='button test' onPress={mockFn} />
      );
      tree.simulate('click');
      expect(mockFn).toHaveBeenCalled();
});