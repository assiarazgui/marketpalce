// firebase-config.js
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';  // Import Firebase Auth module if needed
// Your Firebase config (can be found in your Firebase console)
const firebaseConfig = {
  apiKey: "AIzaSyCXHdKMGSb6OV0vfc6tNi22Ypr7qciTvxc",
  authDomain: "marketplace-961c7.firebaseapp.com",
  projectId: "marketplace-961c7",
  storageBucket: "marketplace-961c7.firebasestorage.app",
  messagingSenderId: "680444226849",
  appId: "1:680444226849:web:3f4b2f13be6011a6dee260",
  measurementId: "G-64S9ZE1FQJ"
};

// Initialize Firebase App
const app = initializeApp(firebaseConfig);

// You can now use Firebase Auth and other Firebase services
const auth = getAuth(app); // Firebase Authentication instance

export { app, auth };
