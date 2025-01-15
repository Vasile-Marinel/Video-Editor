// import React, { useState } from 'react';
// import { signInWithPopup, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
// import { auth, provider } from './firebaseConfig'; // Importă autentificarea și provider-ul
// import './App.css';

// // Funcția pentru autentificarea cu Google
// const loginWithGoogle = () => {
//   signInWithPopup(auth, provider)
//     .then((result) => {
//       const user = result.user;
//       console.log("User info:", user);
//     })
//     .catch((error) => {
//       console.error("Error during sign-in:", error);
//     });
// };

// // Funcția pentru autentificarea cu email și parolă
// const loginWithEmailPassword = (email, password) => {
//   signInWithEmailAndPassword(auth, email, password)
//     .then((userCredential) => {
//       const user = userCredential.user;
//       console.log("Logged in with email:", user);
//     })
//     .catch((error) => {
//       console.error("Error signing in with email and password:", error);
//     });
// };

// // Funcția pentru crearea unui cont cu email și parolă
// const registerWithEmailPassword = (email, password) => {
//   createUserWithEmailAndPassword(auth, email, password)
//     .then((userCredential) => {
//       const user = userCredential.user;
//       console.log("User created:", user);
//     })
//     .catch((error) => {
//       console.error("Error creating account:", error);
//     });
// };

// // Componenta principală React
// function App() {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');

//   return (
//     <div className="App">
//       <div className="login-container">
//         <h1 className="title">Welcome to Video Editor</h1>

//         <div className="email-login">
//           <h3>Login with Email and Password</h3>
//           <input
//             className="input-field"
//             type="email"
//             placeholder="Email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//           />
//           <input
//             className="input-field"
//             type="password"
//             placeholder="Password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//           />
//           <button className="primary-button" onClick={() => loginWithEmailPassword(email, password)}>Login</button>
//         </div>

//         <div className="divider">or</div>

//         <div className="google-login">
//           <button className="google-button" onClick={loginWithGoogle}>Login with Google</button>
//         </div>

//         <div className="register-section">
//           <h3>Don't have an account? Register</h3>
//           <input
//             className="input-field"
//             type="email"
//             placeholder="Email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//           />
//           <input
//             className="input-field"
//             type="password"
//             placeholder="Password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//           />
//           <button className="secondary-button" onClick={() => registerWithEmailPassword(email, password)}>Register</button>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default App;

import React from 'react';
import Login from './components/Login';
import './App.css';

function App() {
  return (
    <div className="App">
      <Login />
    </div>
  );
}

export default App;
