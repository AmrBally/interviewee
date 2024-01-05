// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// import { getFirestore } from "firebase/firestore";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyCU6RnkjljqhTXQ8UGsBykDmKG2TjKYAiE",
  authDomain: "interview-8341f.firebaseapp.com",
  projectId: "interview-8341f",
  storageBucket: "interview-8341f.appspot.com",
  messagingSenderId: "843319716427",
  appId: "1:843319716427:web:dbaf83d9c9c5e537073bce",
  measurementId: "G-YYPRF737HP",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
// const db = getFirestore(app);
const db = getDatabase(app);

export { auth, db };
