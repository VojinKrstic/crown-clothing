import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const config = {
  apiKey: "AIzaSyAAWokPTJ6q5CjG6NlchrMeChCL2fkk2Po",
  authDomain: "crwn-db-43c4b.firebaseapp.com",
  projectId: "crwn-db-43c4b",
  storageBucket: "crwn-db-43c4b.appspot.com",
  messagingSenderId: "674732274371",
  appId: "1:674732274371:web:f95b55e0962934975fa876",
  measurementId: "G-35LQXLTS4R"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;