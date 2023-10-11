// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBRaJcESqqmANZAf7V7MHx4rM68ZqozneY",
  authDomain: "email-password-auth-af4c4.firebaseapp.com",
  projectId: "email-password-auth-af4c4",
  storageBucket: "email-password-auth-af4c4.appspot.com",
  messagingSenderId: "224071711706",
  appId: "1:224071711706:web:e8c5d3eaedfa1b92131ee3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app