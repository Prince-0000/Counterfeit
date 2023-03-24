// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCjgz3ZzKOsEYAsalmYZALY0ZaC2EXiBv0",
  authDomain: "counterfeit-auth.firebaseapp.com",
  projectId: "counterfeit-auth",
  storageBucket: "counterfeit-auth.appspot.com",
  messagingSenderId: "22129602915",
  appId: "1:22129602915:web:9c04a3d9b124ffdf6a6356",
  measurementId: "G-BZSTZ0S0N4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth=getAuth();

export {app,auth};