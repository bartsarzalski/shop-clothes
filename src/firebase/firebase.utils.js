import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyDdtpr3gZW_vLf82yIs3D2BKrc7yebS4EM",
    authDomain: "shop-clothes-f0b2c.firebaseapp.com",
    databaseURL: "https://shop-clothes-f0b2c.firebaseio.com",
    projectId: "shop-clothes-f0b2c",
    storageBucket: "shop-clothes-f0b2c.appspot.com",
    messagingSenderId: "6925731067",
    appId: "1:6925731067:web:d74d22051466c0ca185c5e",
    measurementId: "G-6JZNTWN3MV"
  };

  firebase.initializeApp(config); 

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account' });

  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;