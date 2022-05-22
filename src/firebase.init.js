// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAQ42nG9n3eeyyTrJYdGcjxW7kHWypbh5I",
  authDomain: "project-12-c87fc.firebaseapp.com",
  projectId: "project-12-c87fc",
  storageBucket: "project-12-c87fc.appspot.com",
  messagingSenderId: "191144530631",
  appId: "1:191144530631:web:42940bf4c883a2b72724e2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;