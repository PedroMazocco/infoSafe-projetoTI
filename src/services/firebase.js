// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, initializeAuth, getReactNativePersistence } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAwaK4PXIrKr0clpO7gaoHg-Sz3cjuXDB0",
  authDomain: "infosafe-a3c24.firebaseapp.com",
  projectId: "infosafe-a3c24",
  storageBucket: "infosafe-a3c24.appspot.com",
  messagingSenderId: "563103312535",
  appId: "1:563103312535:web:3d2d47ec8c9188ad27d7d2",
  measurementId: "G-FHY5226ZLM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Initialize Firebase Auth with AsyncStorage for persistence
const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage)
});

export { db, auth };
