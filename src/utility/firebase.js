import firebase from "firebase/compat/app";
import { getAuth } from "firebase/auth";
import "firebase/compat/firestore";
import "firebase/compat/auth";

// const firebaseConfig = {
//   apiKey: "AIzaSyAb62Cx8wf1dyIVP31yxAgmOQqYmcWxUck",
//   authDomain: "clone-aa1f7.firebaseapp.com",
//   projectId: "clone-aa1f7",
//   storageBucket: "clone-aa1f7.appspot.com",
//   messagingSenderId: "52873331159",
//   appId: "1:52873331159:web:3dc6413af16111d47fcb92"
// };
const firebaseConfig = {
  apiKey: "AIzaSyDM6elll-gPCsCTgpQ2vtd-fxmz3ugOK_Q",
  authDomain: "clone-5d2d6.firebaseapp.com",
  projectId: "clone-5d2d6",
  storageBucket: "clone-5d2d6.appspot.com",
  messagingSenderId: "807865462248",
  appId: "1:807865462248:web:c61f54268134158a60085d"};

// Initialize Firebase
const app = firebase.initializeApp (firebaseConfig);
export const auth = getAuth (app);
export const db = app.firestore();