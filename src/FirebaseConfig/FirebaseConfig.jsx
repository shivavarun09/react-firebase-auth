// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAPj8HxwwrpBia84LvWlEc_QNArY8D4HQA",
  authDomain: "react-firebase-auth-48749.firebaseapp.com",
  projectId: "react-firebase-auth-48749",
  storageBucket: "react-firebase-auth-48749.firebasestorage.app",
  messagingSenderId: "281074400213",
  appId: "1:281074400213:web:4014ade84b03631ea3db5c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth =getAuth(app)