// import React, { useState } from "react";
// import { signInWithPopup, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
// import { auth, provider } from 'C:\\Users\\vasil\\video-editor\\src\\firebaseConfig.js'; // Importă autentificarea și provider-ul
// import 'C:\\Users\\vasil\\video-editor\\src\\App.css';

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
// function Login() {
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

// export default Login;

import React, { useState } from "react";
import { signInWithPopup, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { auth, provider } from 'C:\\Users\\vasil\\video-editor\\src\\firebaseConfig.js'; // Importă autentificarea și provider-ul
import 'C:\\Users\\vasil\\video-editor\\src\\App.css'; // Importă stilurile
import 'C:\\Users\\vasil\\video-editor\\src\\components\\Login.css';

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

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');  // Adăugat pentru sign up

  return (
    <div className="main">
      {/* Checkbox pentru a schimba între login și sign up */}
      <input type="checkbox" id="chk" aria-hidden="true" />

      {/* Formul de signup */}
      <div className="signup">
        <form>
          <label htmlFor="chk" aria-hidden="true">Sign up</label>
          <input
            type="text"
            name="txt"
            placeholder="User name"
            required
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="number"
            name="broj"
            placeholder="Phone Number"
            required
          />
          <input
            type="password"
            name="pswd"
            placeholder="Password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            type="button"
            onClick={() => registerWithEmailPassword(email, password)}
          >
            Sign up
          </button>
        </form>
      </div>

      {/* Formul de login */}
      <div className="login">
        <form>
          <label htmlFor="chk" aria-hidden="true">Login</label>
          <input
            type="email"
            name="email"
            placeholder="Email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            name="pswd"
            placeholder="Password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            type="button"
            onClick={() => loginWithEmailPassword(email, password)}
          >
            Login
          </button>

          <div className="or-divider">
          <span>or</span>
          </div>
          <button
            type="button"
            className="google-button"
            onClick={loginWithGoogle}
          >
            Login with Google
          </button>

        </form>
      </div>
    </div>
  );
}

export default Login;
