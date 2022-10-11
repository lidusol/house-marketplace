import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDlG6S3y4MSNLekVCDoy0voTeUyXiaElxg",
  authDomain: "house-marketplace-app-9182a.firebaseapp.com",
  projectId: "house-marketplace-app-9182a",
  storageBucket: "house-marketplace-app-9182a.appspot.com",
  messagingSenderId: "923798472793",
  appId: "1:923798472793:web:98500667afdcd503ec4948",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore();
