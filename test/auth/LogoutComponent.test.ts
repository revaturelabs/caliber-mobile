// import React from 'react';
// import {mount, shallow} from 'enzyme';
import login from './login';
import logout from './logout';
import firebase from 'firebase/app';

/**
 * mock firebase login and logout functions
 */
jest.mock('firebase/app', () => ({
    auth: {
        signInWithEmailAndPassword: jest
            .fn()
            .mockImplementation((email, password) =>
                Promise.resolve({
                    email: email,
                    userId: 1
                })
            ),
    
        signOut: jest  
        .fn()
        .mockImplementation(() =>
        Promise.resolve(true)  
        )
    }
}));

/**
 * test login 
 */
test('something', async () => {
    await login('example@gmail.com', 'smth');
    expect(firebase.auth().signInWithEmailAndPassword).toBeCalledWith('example@gmail.com', 'smth');
}); 

/**
 * test logout
 */
test('Logout user', async () => {
    await logout();
    expect(firebase.auth().signOut).toBeCalled();
})


