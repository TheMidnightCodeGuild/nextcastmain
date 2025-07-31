// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA0VYLgEWi_7HMuGBhTf6cbibqkRFCOhi0",
  authDomain: "nexcast-4b293.firebaseapp.com",
  projectId: "nexcast-4b293",
  storageBucket: "nexcast-4b293.firebasestorage.app",
  messagingSenderId: "805956439342",
  appId: "1:805956439342:web:4976d6791dd92874317ebf",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore
const db = getFirestore(app);

// Export both app and db
export { app, db };
