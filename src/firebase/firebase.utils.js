import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import { getAuth } from "firebase/auth";



const config = {
  apiKey: "AIzaSyD9QspqiTT1sGGM6AjoItZJcCKkknmGTs0",
  authDomain: "communities-building.firebaseapp.com",
  projectId: "communities-building",
  storageBucket: "communities-building.appspot.com",
  messagingSenderId: "171851862270",
  appId: "1:171851862270:web:fe465026b0d46d435295af",
};

firebase.initializeApp(config);


export const firestore = firebase.firestore();

export default firebase;
