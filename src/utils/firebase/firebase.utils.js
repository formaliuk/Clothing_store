import { initializeApp } from "firebase/app"
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider
} from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyCAukhxtYUWdZFmtqjBNrEFtOE-7Py6-vI",
  authDomain: "clothing-store-db-2b997.firebaseapp.com",
  projectId: "clothing-store-db-2b997",
  storageBucket: "clothing-store-db-2b997.appspot.com",
  messagingSenderId: "325270897002",
  appId: "1:325270897002:web:aac0799540727f6edfa513"
};

const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider()

provider.setCustomParameters({
  prompt: 'select_account'
})

export const auth = getAuth()
export const signInWithGooglePopup = () => signInWithPopup(auth, provider)