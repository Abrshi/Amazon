import firebase from "firebase/compat/app";
import { getAuth } from "firebase/auth";
import "firebase/compat/firestore";
import "firebase/compat/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAb62Cx8wf1dyIVP31yxAgmOQqYmcWxUck",
  authDomain: "clone-aa1f7.firebaseapp.com",
  projectId: "clone-aa1f7",
  storageBucket: "clone-aa1f7.appspot.com",
  messagingSenderId: "52873331159",
  appId: "1:52873331159:web:3dc6413af16111d47fcb92"
};

// Initialize Firebase
const app = firebase.initializeApp (firebaseConfig);
export const auth = getAuth (app);
export const db = app.firestore();