import { mount} from 'enzyme';
import AddNoteComponent from '../addNote.component';

describe('testing adding an overall note', () => {
    const wrapper = mount(<AddNoteComponent/>);
    const button = wrapper.find('button');
    const input = wrapper.find('input');

    button.simulate('click');
    expect(button).toHaveBeenCalled();
    
    input.simulate('change', {target: {value: 'something'}});
    expect(input).toHaveBeenCalled();
});