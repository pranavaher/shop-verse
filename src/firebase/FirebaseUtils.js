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

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();

  console.log(snapShot);

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log("Error creating User: ", error.message);
    }
  }

  return userRef;
};

firebase.initializeApp(config);
export const firestore = firebase.firestore();
export const auth = firebase.auth();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
