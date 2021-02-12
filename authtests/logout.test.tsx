import 'React' from 'react';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import App from '../App';
import * as firebase from '../firebase-client-config';

Enzyme.configure({adapter: new Adapter()});

describe('handleLogout', () => {
    
    beforeAll(function() {
        firebase.firebase.auth = jest.fn().mockReturnValue({
            currentUser: true,
            logout: function(){return true;}
        });
    });

    test('should return true', () => {
        const wrapper = Enzyme.shallow( <App/>);
        let result = wrapper.instance().handleLogout();
        expect(result).toBe(true);
    });
});

