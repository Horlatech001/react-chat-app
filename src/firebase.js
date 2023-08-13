// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAoe4piI8N3Qc1AKwv5jS6XT94GJ2q4cxA",
  authDomain: "react-chat-app-f702a.firebaseapp.com",
  projectId: "react-chat-app-f702a",
  storageBucket: "react-chat-app-f702a.appspot.com",
  messagingSenderId: "147016675618",
  appId: "1:147016675618:web:db791033def99066d4757b"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();
