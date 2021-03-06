// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { collection, deleteDoc, doc, getDocs, getFirestore, setDoc } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";
import { v4 as uuid } from 'uuid';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
export const firebaseConfig = () => {
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

export const firebaseRegisterUser = (email, password) => {
  createUserWithEmailAndPassword(getAuth(), email, password)
    .then(credentials => {
      console.log(credentials);
    })
}

export const firebaseLogIn = async (credentials) => {
  const { email, password } = credentials;
  const auth = getAuth();
  try {
    let userCredentials = await signInWithEmailAndPassword(auth, email, password);
    //userCredentials.user
  } catch (error) {
    console.log(error);
    return false;
  }
  return true;
}

export const firebaseGetCollection = async (collectionName) => {
  let list = [];
  const query = collection(getFirestore(), collectionName);
  const response = await getDocs(query);
  response.forEach((document) => {
    let element = document.data();
    element.id = document.id;
    list.push(element);
  });
  return list;
}

export const firebaseCreate = (coleccion, element) => {
  element.id = uuid();
  let reference = doc(getFirestore(), coleccion, element.id);
  setDoc(reference, element);
}

export const firebaseDelete = async (coleccion, id) => {
  await deleteDoc(doc(getFirestore(), coleccion, id));
}