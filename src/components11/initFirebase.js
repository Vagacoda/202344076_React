// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDC-lEy4F3A_DgDb2IzI63tKrhqr-TScDo",
  authDomain: "inhac-9e1e9.firebaseapp.com",
  projectId: "inhac-9e1e9",
  storageBucket: "inhac-9e1e9.firebasestorage.app",
  messagingSenderId: "11941932007",
  appId: "1:11941932007:web:58d2119e8af8ea3bff6b42",
  measurementId: "G-DM5TD6687P"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);