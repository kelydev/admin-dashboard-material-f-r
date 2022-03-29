// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
export function firebaseConfig() {
  const config = {
    apiKey: "AIzaSyDBCQmU9UQ_kvDBETqCRJeKe_lAmMzLlZg",
    authDomain: "sistema-fa054.firebaseapp.com",
    projectId: "sistema-fa054",
    storageBucket: "sistema-fa054.appspot.com",
    messagingSenderId: "769887160696",
    appId: "1:769887160696:web:38eea942e7de3c49a8e08d",
    measurementId: "G-1ZNT5BXFKM"
  };

  // Initialize Firebase
  const app = initializeApp(config);
  const analytics = getAnalytics(app);
}