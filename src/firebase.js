// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
import { getDatabase } from 'firebase/database'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAwaZGKHtPMDcdtjHxwbeFt-qgj6E1a220",
  authDomain: "extended-creek-380015.firebaseapp.com",
  projectId: "extended-creek-380015",
  storageBucket: "extended-creek-380015.appspot.com",
  messagingSenderId: "890734925950",
  appId: "1:890734925950:web:9d899bb9adc32fbc7ee02f",
  measurementId: "G-CMMR2VDCYG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase();
// console.log(db.email);
console.log(app);
const auth = getAuth();

export { app, auth, db };