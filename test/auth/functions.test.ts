import {login, sendPasswordResetEmail, logout} from './functions';
import {auth} from '../../user/config';

/**
 * mock firebase login and logout functions
 */
jest.mock('../../user/config', () => ({
    auth: {
        signInWithEmailAndPassword: jest
            .fn()
            .mockImplementation((email, password) =>
                Promise.resolve({
                    email: email,
                    userId: 1,
                    password: password
                })
            ),
    
        signOut: jest  
        .fn()
        .mockImplementation(() =>
        Promise.resolve(true)  
        ), 
        
        sendPasswordResetEmail: jest
        .fn()
        .mockImplementation((email) =>  
            Promise.resolve({
                email: email
            })
        )
    }
}));

/**
 * test login 
 */
test('Logging in user', async () => {
    await login('example@gmail.com', 'smth');
    expect(auth.signInWithEmailAndPassword).toBeCalledWith('example@gmail.com', 'smth');
}); 

/**
 * test logout
 */
test('Logout user', async () => {
    await logout();
    expect(auth.signOut).toBeCalled();
})

/**
 * test reset password link
 */
test('Sending password reset link to email', async () => {
    await sendPasswordResetEmail('example@gmail.com');
    expect(auth.sendPasswordResetEmail).toBeCalledWith('example@gmail.com');
})