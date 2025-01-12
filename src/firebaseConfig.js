// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBPwIfCw5eRCFaLnaYxeQBv9-FYWKMwoKQ",
  authDomain: "video-editor-d9816.firebaseapp.com",
  projectId: "video-editor-d9816",
  storageBucket: "video-editor-d9816.firebasestorage.app",
  messagingSenderId: "384665793991",
  appId: "1:384665793991:web:05561a6f6b315b6b2bd5e2",
  measurementId: "G-FL9R5F71KS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);  // Inițializează autentificarea
const provider = new GoogleAuthProvider();  // Crează providerul Google