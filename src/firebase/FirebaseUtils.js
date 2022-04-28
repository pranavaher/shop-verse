import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";

const config = {
  apiKey: "AIzaSyAEziyw23524K1CqeoeXLBrJ5AqRMh3udE",
  authDomain: "shop-verse.firebaseapp.com",
  projectId: "shop-verse",
  storageBucket: "shop-verse.appspot.com",
  messagingSenderId: "758516973078",
  appId: "1:758516973078:web:183d7cd01392f3856eff37",
  measurementId: "G-G2HRY1LWEQ",
};

firebase.initializeApp(config);
export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
