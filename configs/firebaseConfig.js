// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getStorage} from 'firebase/storage';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "car-marketplace-e4417.firebaseapp.com",
  projectId: "car-marketplace-e4417",
  storageBucket: "car-marketplace-e4417.appspot.com",
  messagingSenderId: "827802091039",
  appId: "1:827802091039:web:dba40df692293bbf7ddf2a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage=getStorage(app);