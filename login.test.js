import login from './login';
import firebase from 'firebase/auth';

jest.mock('firebase', () => {
  const auth = jest.fn();
  auth.signInWithEmailAndPassword = jest.fn();
  return auth;
});

describe('login', () => {
  test('firebase is called', () => {
    const temp = 'not matter';
    login(temp, temp);
    expect(firebase.auth().auth.signInWithEmailAndPassword).toHaveBeenCalled();
  });
});