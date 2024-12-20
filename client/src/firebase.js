// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_APT_KEY,
  authDomain: "mern-blog-41ae0.firebaseapp.com",
  projectId: "mern-blog-41ae0",
  storageBucket: "mern-blog-41ae0.firebasestorage.app",
  messagingSenderId: "394082243218",
  appId: "1:394082243218:web:b72f9f36a4178a8909cc4b"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);