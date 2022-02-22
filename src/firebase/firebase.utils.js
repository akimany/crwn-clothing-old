import firebase from 'firebase/app';
import { initializeApp } from 'firebase/app';
import { getAuth, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyBhGauovTAqb3JJYIAJmXQV7PKMKx8E-nY',
  authDomain: 'crwn-db-6ee63.firebaseapp.com',
  projectId: 'crwn-db-6ee63',
  storageBucket: 'crwn-db-6ee63.appspot.com',
  messagingSenderId: '218708171087',
  appId: '1:218708171087:web:e8f92044f7559d6867cd3a',
};

// Initialize Firebase
initializeApp(firebaseConfig);

// db
const db = getFirestore();

//
const auth = getAuth();

//
const provider = new GoogleAuthProvider();

// triggers the google prompt
provider.setCustomParameters({ prompt: 'select_account' });

const signInWithGoogle = () => {
  // don't forget to add the auth
  signInWithPopup(auth, provider);
};

export { db, auth, getFirestore, signInWithGoogle };
