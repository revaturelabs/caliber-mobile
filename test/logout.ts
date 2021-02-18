import firebase from 'firebase/app';

const Logout = {
  getLoggedOutUser: () => {
    const currentUser = firebase.auth().currentUser;
    if (currentUser) {
       {
        return  {
            email: 'test@gmail.com',
            userId: 1
        }
       
      };
    } else {
      return false;
    }
  },
  
};
export default Logout;