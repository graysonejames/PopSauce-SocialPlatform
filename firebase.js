import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyAbBoWOxeiMA-K0SPgtge0CS4vZYx6KQg8",
    authDomain: "popsauce-goodlucklich.firebaseapp.com",
    databaseURL: "https://popsauce-goodlucklich-default-rtdb.firebaseio.com",
    projectId: "popsauce-goodlucklich",
    storageBucket: "popsauce-goodlucklich.appspot.com",
    messagingSenderId: "988262000227",
    appId: "1:988262000227:web:7cccfa71d6de598227ba56",
    measurementId: "G-L3KX5PKT9G",
};

// Check if the Firebase app has already been initialized
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore(app);
const storage = getStorage(app);

export { app, db, storage };
