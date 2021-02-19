import React from 'react';
import { auth } from '../firebase-client-config';
//import firebase from 'firebase/app';
import login from './function';
jest.mock('../firebase-client-config', () => ({
    auth: {
        signInWithEmailAndPassword: jest
            .fn()
            .mockImplementation((email, password) =>
                Promise.resolve({
                    email: email,
                    userId: 1
                })
            )
    }
}));
// jest.mock('firebase/app', () => {
//     return {
//         auth: jest.fn().mockImplementation(() => ({
//             setPersistence: jest.fn(),
//             signInWithEmailAndPassword: jest
//                 .fn()
//                 .mockImplementation((email, password) => ({
//                     email: email,
//                     userId: 1,
//                     isEmailVerified: true
//                 }))
//         })),
//         initializeApp: jest.fn()
//     };
// });

test('test to return email address and userId', async () => {
    // (firebase.auth as jest.Mocked<any>).mockReturnValueOnce({
    //     currentUser: { email: 'example@gmail.com', uid: 1, emailVerified: true }
    // });
    const actual = await login('example@gmail.com', 'smth');
    expect(actual).toEqual({
        email: 'example@gmail.com',
        userId: 1
    });
});
