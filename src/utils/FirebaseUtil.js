// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
export function firebaseConfig() {
  const config = {
    apiKey: "AIzaSyDuxn_GR1_n36V586LUdiZv84_Su1v5Uqk",
    authDomain: "admin-dashboard-e.firebaseapp.com",
    projectId: "admin-dashboard-e",
    storageBucket: "admin-dashboard-e.appspot.com",
    messagingSenderId: "513560183597",
    appId: "1:513560183597:web:f20fe70909716e6f5589a4",
    measurementId: "G-FWTZYHQNG2"
  };

  // Initialize Firebase
  const app = initializeApp(config);
  const analytics = getAnalytics(app);
}

export function firebaseRegisterUser(email, password) {
  createUserWithEmailAndPassword(getAuth(), email, password)
    .then(credentials => {
      console.log(credentials);
    })
}