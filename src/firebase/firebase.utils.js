import { initializeApp } from 'firebase/app';
import { getAuth, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import {
  getFirestore,
  collection,
  doc,
  query,
  where,
  getDoc,
  setDoc,
} from 'firebase/firestore';

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
const firebaseApp = initializeApp(firebaseConfig);

// db
const db = getFirestore(firebaseApp);

//test function:
const getData = async () => {
  const docRef = doc(db, 'users', 'ACZLF37XpmdqCAGEJ7DQ');
  const docSnap = await getDoc(docRef);
  console.log('docSnap ', docSnap);
  console.log('docSnap Data', docSnap.data());
};

const makeUserProfileDocument = async (userAuth, additonalData) => {
  if (!userAuth) return;
  const userRef = doc(db, `users/${userAuth.uid}`);
  const snapshot = await getDoc(userRef);
  // console.log('snapshot', snapshot);

  if (!snapshot.exists) {
    const { displayName, email } = userAuth;
    const madeAt = new Date();

    try {
      await setDoc(userRef, { displayName, email, madeAt, ...additonalData });
    } catch (error) {
      console.log('error trying to send to user data', error.message);
    }
  }
  // returns a doc
  return userRef;
};

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

export { db, auth, getFirestore, signInWithGoogle, makeUserProfileDocument };
