
import {initializeApp} from 'firebase/app'

import { 
getAuth, 
createUserWithEmailAndPassword, 
updateProfile, 
onAuthStateChanged, 
signInWithEmailAndPassword, 
signOut 
} from 'firebase/auth';


//Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyDATgtSo32J9JFpIBdi1KY_y0agGeE5WOk",
  authDomain: "react-e-commerce-ead8d.firebaseapp.com",
  projectId: "react-e-commerce-ead8d",
  storageBucket: "react-e-commerce-ead8d.appspot.com",
  messagingSenderId: "403170776301",
  appId: "1:403170776301:web:26ffd41e6f4deb932f68e4",
  measurementId: "G-QH9B12YZVM"
};

// initialize firbaseapp
initializeApp(firebaseConfig)

// initialize services
const auth = getAuth()

export {
auth,
createUserWithEmailAndPassword,
updateProfile,
onAuthStateChanged,
signInWithEmailAndPassword,
signOut
}