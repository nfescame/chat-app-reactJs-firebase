import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBsczfPgOfZ-x_owPEszjiRc4_msEDd0Lg",
  authDomain: "chat-app-41a69.firebaseapp.com",
  projectId: "chat-app-41a69",
  storageBucket: "chat-app-41a69.appspot.com",
  messagingSenderId: "335657398229",
  appId: "1:335657398229:web:83620caeee67fa149e175c",
};

const app = firebase.initializeApp(firebaseConfig);

const db = app.firestore();
const auth = app.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };
