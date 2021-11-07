import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDvmFzPvoprIsgsvjIObFb06vsl4b_b7cw",
  authDomain: "uber-clone-fab19.firebaseapp.com",
  projectId: "uber-clone-fab19",
  storageBucket: "uber-clone-fab19.appspot.com",
  messagingSenderId: "731555620076",
  appId: "1:731555620076:web:328388f8f138092cd571c9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider();
const auth = getAuth();

export { app, provider, auth };