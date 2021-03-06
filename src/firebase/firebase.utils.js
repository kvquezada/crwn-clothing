import firebase from "firebase/app";
import 'firebase/firestore';
import 'firebase/auth';


const config = {
    apiKey: "AIzaSyDsfwaQvGD8CYJUWUMiF_7ZMCJPHhDfAh4",
    authDomain: "crwn-db-afa74.firebaseapp.com",
    projectId: "crwn-db-afa74",
    storageBucket: "crwn-db-afa74.appspot.com",
    messagingSenderId: "893591299400",
    appId: "1:893591299400:web:3b696b2933de7a71043f7d",
    measurementId: "G-L674W2X3TY"
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);

    const snapShot = await userRef.get();

    if(!snapShot.exists) {
        const {displayName, email} = userAuth;
        const createAt = new Date();

        try {
            await userRef.set({
                displayName,
                email,
                createAt,
                ...additionalData
            })
        } catch (e) {
            console.log('error creating user', e.message)
        }
    }

    return userRef;

}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;