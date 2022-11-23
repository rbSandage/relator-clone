// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD2_jWDJtjQycAH8pHf5_3IlOpBaxJdBpY",
  authDomain: "realtor-clone-react-6462c.firebaseapp.com",
  projectId: "realtor-clone-react-6462c", 
  storageBucket: "realtor-clone-react-6462c.appspot.com",
  messagingSenderId: "457049863225",
  appId: "1:457049863225:web:4b8ae8d95078484ae5c9e8"
};

// Initialize Firebase
 initializeApp(firebaseConfig);
 export const db = getFirestore()