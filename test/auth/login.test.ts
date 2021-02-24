import Login from './login';
import firebase from 'firebase/app';

jest.mock('firebase/app', () => {
  return {
    auth: jest.fn(),
  };
});

describe('is user credentials right', () => {
  it('should return user', () => {
    (firebase.auth as jest.Mocked<any>).mockReturnValueOnce({
      currentUser: { email: 'test@gmail.com', uid: 1 },
    });
    const actual = Login.getLoggedInUser();
    expect(actual).toEqual({
      email: 'test@gmail.com',
      userId: 1
      
    });
  });

  it('should return undefined if no user data', () => {
    (firebase.auth as jest.Mocked<any>).mockReturnValueOnce({});
    const actual = Login.getLoggedInUser();
    expect(actual).toBeUndefined();
  });
});