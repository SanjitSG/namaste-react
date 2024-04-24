// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBg5PMDCfKkDU3V8MNCTSLe_XvVBjJbEI8",
  authDomain: "netflixgpt-784d6.firebaseapp.com",
  projectId: "netflixgpt-784d6",
  storageBucket: "netflixgpt-784d6.appspot.com",
  messagingSenderId: "839809468572",
  appId: "1:839809468572:web:94490cdf5f31d406088559",
  measurementId: "G-76S1RY696S",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
