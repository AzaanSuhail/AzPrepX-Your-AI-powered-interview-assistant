// Import the functions you need from the SDKs you need
import { getApp, getApps, initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCTklgPaZTkpFM0ZIAFa7Klyuv_pjA1ELA",
  authDomain: "interview---genie.firebaseapp.com",
  projectId: "interview---genie",
  storageBucket: "interview---genie.firebasestorage.app",
  messagingSenderId: "702766051550",
  appId: "1:702766051550:web:220ab7fe632f644bcf924f",
  measurementId: "G-T3T90LJL22"
};


// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
// const analytics = getAnalytics(app);

export const auth = getAuth(app);
export const db = getFirestore(app);

 