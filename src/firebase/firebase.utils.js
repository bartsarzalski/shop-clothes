import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyBcC9RBsQR_IvfM7YohqpCt9sBKGC5RgBk",
    authDomain: "shop-clothes-db.firebaseapp.com",
    databaseURL: "https://shop-clothes-db.firebaseio.com",
    projectId: "shop-clothes-db",
    storageBucket: "shop-clothes-db.appspot.com",
    messagingSenderId: "18753139693",
    appId: "1:18753139693:web:3224bce56f4d239a166de4",
    measurementId: "G-FWGPV6EYWJ"
  };

  firebase.initializeApp(config); 

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account' });

  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const snapShot = await userRef.get();

    if (!snapShot.exists) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })
        } catch (err) {
            console.log(err.message);
        }
    }
    return userRef;
  }

  export default firebase;