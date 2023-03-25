// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAwaZGKHtPMDcdtjHxwbeFt-qgj6E1a220",
  authDomain: "extended-creek-380015.firebaseapp.com",
  databaseURL: "https://extended-creek-380015-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "extended-creek-380015",
  storageBucket: "extended-creek-380015.appspot.com",
  messagingSenderId: "890734925950",
  appId: "1:890734925950:web:9d899bb9adc32fbc7ee02f",
  measurementId: "G-CMMR2VDCYG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();


export  { app, auth };