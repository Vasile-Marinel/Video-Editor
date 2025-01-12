// firebaseConfig.js
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

// Configurarea Firebase
const firebaseConfig = {
  apiKey: "AIzaSyBPwIfCw5eRCFaLnaYxeQBv9-FYWKMwoKQ",
  authDomain: "video-editor-d9816.firebaseapp.com",
  projectId: "video-editor-d9816",
  storageBucket: "video-editor-d9816.firebasestorage.app",
  messagingSenderId: "384665793991",
  appId: "1:384665793991:web:05561a6f6b315b6b2bd5e2",
  measurementId: "G-FL9R5F71KS"
};

// Inițializarea Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { app, auth, provider };
