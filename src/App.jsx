import React, { useState } from 'react';
import { getAuth, signInWithPopup, GoogleAuthProvider, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { initializeApp } from "firebase/app";
import './App.css';

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

// Obține instanța de autentificare
const auth = getAuth(app);  
const provider = new GoogleAuthProvider();  

// Funcția pentru autentificarea cu Google
const loginWithGoogle = () => {
  signInWithPopup(auth, provider)
    .then((result) => {
      const user = result.user;
      console.log("User info:", user);
    })
    .catch((error) => {
      console.error("Error during sign-in:", error);
    });
};

// Funcția pentru autentificarea cu email și parolă
const loginWithEmailPassword = (email, password) => {
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      console.log("Logged in with email:", user);
    })
    .catch((error) => {
      console.error("Error signing in with email and password:", error);
    });
};

// Funcția pentru crearea unui cont cu email și parolă
const registerWithEmailPassword = (email, password) => {
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      console.log("User created:", user);
    })
    .catch((error) => {
      console.error("Error creating account:", error);
    });
};

// Componenta principală React
function App() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <div className="App">
      <h1>Welcome to Video Editor</h1>

      {/* Conectare cu Google */}
      <button onClick={loginWithGoogle}>Login with Google</button>

      <div>
        <h2>Or</h2>
        
        {/* Formular pentru autentificare cu email și parolă */}
        <div>
          <h3>Login with Email and Password</h3>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button onClick={() => loginWithEmailPassword(email, password)}>Login</button>
        </div>

        {/* Formular pentru crearea unui cont cu email și parolă */}
        <div>
          <h3>Don't have an account? Register</h3>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button onClick={() => registerWithEmailPassword(email, password)}>Register</button>
        </div>
      </div>
    </div>
  );
}

export default App;