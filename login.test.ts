import login from './login';
import firebase from 'firebase/auth';

jest.mock('firebase', () => {
  const auth = jest.fn();
  auth.signInWithEmailAndPassword = jest.fn();
  // auth.signInWithEmailAndPassword = jest.fn().mockImplementation((email, pass) => {
  //   const user = {
  //     email: 'user@gmail.com',
  //     password: '123',
  //     uid: 'faj453fadsfasf54f7ds5f4'
  //   }
  //   let {password, ...result} = user;
  //   if(email === user.email && pass === user.password){
  //     return result;
  //   }else{
  //     return null;
  //   }
  // });
  return auth;
});

describe('login', () => {
  test('firebase is called', () => {
    const temp = 'not matter';
    login(temp, temp);
    expect(firebase.auth().auth.signInWithEmailAndPassword).toHaveBeenCalled();
  });
});