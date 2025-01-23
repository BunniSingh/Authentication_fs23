// Import the functions you need from the SDKs you {need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAjUp4N5Tsh_ejLXs6rGe_KfBDUghhFYBY",
  authDomain: "fs-22-23.firebaseapp.com",
  projectId: "fs-22-23",
  storageBucket: "fs-22-23.firebasestorage.app",
  messagingSenderId: "617657806838",
  appId: "1:617657806838:web:d3e84e8420bf50abbbe1d7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();