import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const config = {
  apiKey: "AIzaSyBkRXYROXpSSgHffQdxw6mV9MPvBEIvHOg",
  authDomain: "communities-building-prod.firebaseapp.com",
  projectId: "communities-building-prod",
  storageBucket: "communities-building-prod.appspot.com",
  messagingSenderId: "278185574252",
  appId: "1:278185574252:web:06c2341c560d0a682fbd49",
};

firebase.initializeApp(config);

export const firestore = firebase.firestore();

export default firebase;
