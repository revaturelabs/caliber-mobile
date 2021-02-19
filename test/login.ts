import firebase from 'firebase/app';

const Login = {
  getLoggedInUser: () => {
    const currentUser = firebase.auth().currentUser;
    if (currentUser) {
      return {
        
            };
    } else {
      return true;
    }
  },
  
};
export default Login;