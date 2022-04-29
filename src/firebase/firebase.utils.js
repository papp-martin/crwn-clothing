import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const config = {
    apiKey: "AIzaSyCL0Gdktls57WFcuNHhUleZTEBls5vf0cc",
    authDomain: "crwn-db-19fed.firebaseapp.com",
    projectId: "crwn-db-19fed",
    storageBucket: "crwn-db-19fed.appspot.com",
    messagingSenderId: "566863811685",
    appId: "1:566863811685:web:ad99266b0e200b21d3228c",
    measurementId: "G-T2BJ5DBRQ4"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;