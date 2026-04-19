// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAb5eCYapcekvMWpZfVbnYBEPj9TjZ8AQ8",
  authDomain: "dragon-news-code-43e55.firebaseapp.com",
  projectId: "dragon-news-code-43e55",
  storageBucket: "dragon-news-code-43e55.firebasestorage.app",
  messagingSenderId: "846435641930",
  appId: "1:846435641930:web:fa0399da79202f407454b3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);