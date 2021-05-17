import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import { updateDoc } from "firebase/firestore";
import { collection, query, getDocs } from "firebase/firestore";

import "./firebase.utils";


import StringCrypto from "string-crypto";

const db = firebase.firestore();

const {
  encryptString,
  decryptString,
} = new StringCrypto();

export const saveCalendar = async (id, text, pass) => {
  // check if vision ith this name exists
  const encryptedText = encryptString(text, pass);

  // Add a new document in collection "cities"
  try {
    const ref = await db.collection("calendars").doc(id);
    await updateDoc(ref, {
      text: encryptedText,
    });
  } catch (e) {
    console.error("Error adding vision calendar: ", e);
  }
};


export const getCalendar = async (pass) => {
  // check if vision ith this name exists

  const q = query(collection(db, "calendars"));

  const calendars = [];

  try {
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots
      calendars.push({  ...doc.data(), id: doc.id, text: doc.data().text && decryptString(doc.data().text, pass) });
    });
  } catch (e) {
    console.error("Error reading vision calendar: ", e);
  }

  return calendars[0];
};
