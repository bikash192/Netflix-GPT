// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCkQmJWBa9qQ9MiuM3muCJbK5dZuMVwyuk",
  authDomain: "netflix-gpt-24dc1.firebaseapp.com",
  projectId: "netflix-gpt-24dc1",
  storageBucket: "netflix-gpt-24dc1.firebasestorage.app",
  messagingSenderId: "381613148641",
  appId: "1:381613148641:web:81710c0d08422600adaaa0",
  measurementId: "G-1K3F6SHF6W"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth=getAuth();