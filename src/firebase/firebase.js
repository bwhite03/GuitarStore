import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyA2LqiTaLUVzTtJFOKE5EbEioSOSCOaERM",
  authDomain: "guitar-world.firebaseapp.com",
  databaseURL: "https://guitar-world.firebaseio.com",
  projectId: "guitar-world",
  storageBucket: "",
  messagingSenderId: "634356655554",
  appId: "1:634356655554:web:c98a9883cd4b8d18"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
