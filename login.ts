import firebase from 'firebase';
import '@firebase/auth';

export default function login(email: string, password: string) {
  firebase
    .auth()
    .signInWithEmailAndPassword(email, password)
    .then((userCredential) => {
      let user = userCredential.user;
      console.log(user);
    })
    .catch((err) => {
      console.log(err);
    });
}
