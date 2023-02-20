// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";
import {getStorage} from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAbBoWOxeiMA-K0SPgtge0CS4vZYx6KQg8",
  authDomain: "popsauce-goodlucklich.firebaseapp.com",
  databaseURL: "https://popsauce-goodlucklich-default-rtdb.firebaseio.com",
  projectId: "popsauce-goodlucklich",
  storageBucket: "popsauce-goodlucklich.appspot.com",
  messagingSenderId: "988262000227",
  appId: "1:988262000227:web:7cccfa71d6de598227ba56",
  measurementId: "G-L3KX5PKT9G"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore();
const storage = getStorage();

export {app, db, storage };