import Logout from './logout';
import firebase from 'firebase/app';

jest.mock('firebase/app', () => {
  return {
    auth: jest.fn(),
  };
});

describe('is user logged out', () => {
  it('should not return user', () => {
    (firebase.auth as jest.Mocked<any>).mockReturnValueOnce({
      currentUser: { undefined},
    });
    const actual = Logout.getLoggedOutUser();
    expect(actual).toEqual({
      undefined
      
    });
  });

  it('should return undefined if no user data', () => {
    (firebase.auth as jest.Mocked<any>).mockReturnValueOnce({});
    const actual = Logout.getLoggedOutUser();
    expect(actual).toBe(true);
  });
});