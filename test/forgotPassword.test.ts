// import Login from './login';
// import firebase from 'firebase/app';

// jest.mock('firebase/app', () => {
//   return {
//     auth: jest.fn(),
//   };
// });

// describe('is user credentials right', () => {
//   it('should return user', () => {
//     (firebase.auth as jest.Mocked<any>).mockReturnValueOnce({
//       currentUser: { email: 'test@gmail.com', uid: 1 },
//     });
//     const actual = Login.getLoggedInUser();
//     expect(actual).toEqual({
//       email: 'test@gmail.com',
//       userId: 1
      
//     });
//   });

//   it('should return undefined if no user data', () => {
//     (firebase.auth as jest.Mocked<any>).mockReturnValueOnce({});
//     const actual = Login.getLoggedInUser();
//     expect(actual).toBeUndefined();
//   });
// });

describe("<ForgotPassowrd />", () => {
    it("renders text input correctly", () => {
      const tree = renderer.create(<ThemeProvider theme={themes.default}><ForgotPassword /></ThemeProvider>).toJSON();
      expect(tree).toMatchSnapshot();
    });
  
    it("sends password reset email when button clicked", () => {
      const onSubmitMock = jest.fn();
  
      const component = Enzyme.mount(
        <ThemeProvider theme={themes.default}><ForgotPassword onSubmit={onSubmitMock} /></ThemeProvider>
      );
  
      component.find("input.username").simulate('change', { target: { value: 'myUser' } })
      component.find("input.password").simulate('change', { target: { value: 'myPassword' } })
      component.find("form").simulate("submit");
  
      console.log("onClickMock.mock", onSubmitMock.mock)
      expect(onSubmitMock).toBeCalled()
    });
  });