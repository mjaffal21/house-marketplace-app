// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC3BluEf5qH2On6TOhEWs51a8Z2g5bCB8k",
  authDomain: "house-marketplace-app-708ea.firebaseapp.com",
  projectId: "house-marketplace-app-708ea",
  storageBucket: "house-marketplace-app-708ea.appspot.com",
  messagingSenderId: "507095295661",
  appId: "1:507095295661:web:4b43aab8c3cfe56b624824"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore()