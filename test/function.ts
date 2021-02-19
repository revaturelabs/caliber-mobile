import { auth } from '../firebase-client-config';

export default function login (email: string, password: string) {
    auth.signInWithEmailAndPassword(email, password).then((res)=>{
        console.log('i logged In');
        console.log('store should include user info if state monitor is working');
    }).catch(err=>{
        console.error(err);
    })
}