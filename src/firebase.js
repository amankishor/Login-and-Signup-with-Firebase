// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyCc3sU0fVqDCP6LcH6lRN-Zg36Ya9M9OLs",
  authDomain: "aman-5b743.firebaseapp.com",
  projectId: "aman-5b743",
  storageBucket: "aman-5b743.appspot.com",
  messagingSenderId: "629802628486",
  appId: "1:629802628486:web:e0f108625e002855d52807",
  measurementId: "G-YVENW46XHC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();

export{app,auth};
