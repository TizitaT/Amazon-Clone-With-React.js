// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAuth } from "firebase/auth";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD7ITvNvSNhzGzNugPmanlW3iN3Z9eXlrw",
  authDomain: "clone-tizitat.firebaseapp.com",
  projectId: "clone-tizitat",
  storageBucket: "clone-tizitat.appspot.com",
  messagingSenderId: "835062879968",
  appId: "1:835062879968:web:39902256b9971fbb38a285",
  measurementId: "G-7XMX0N9TQQ",
};

// Initialize Firebase
// const app = initializeApp(firebaseConfig);
const app = firebase.initializeApp(firebaseConfig);
// const auth = getAuth(app);
const auth = firebase.auth();
const db = app.firestore();

export { db, auth };
