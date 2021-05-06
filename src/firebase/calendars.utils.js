import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import { updateDoc } from "firebase/firestore";
import { collection, query, getDocs } from "firebase/firestore";

import "./firebase.utils";

const db = firebase.firestore();

export const saveCalendar = async (id, text) => {
  // check if vision ith this name exists

  // Add a new document in collection "cities"
  try {
    const ref = await db.collection("calendars").doc(id);
    await updateDoc(ref, {
      text: text,
    });
  } catch (e) {
    console.error("Error adding vision calendar: ", e);
  }
};


export const getCalendar = async () => {
  // check if vision ith this name exists

  const q = query(collection(db, "calendars"));
  const q3 = query(collection(db, "test"));

  const calendars = [];
  const calendars3 = [];

  try {
    const querySnapshot = await getDocs(q);
    const querySnapshot3 = await getDocs(q3);
    querySnapshot.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots
      calendars.push({ id: doc.id, ...doc.data() });
    });
    querySnapshot3.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots
      calendars3.push({ id: doc.id, ...doc.data() });
    });
  } catch (e) {
    console.error("Error reading vision calendar: ", e);
  }

  calendars[0].test = calendars3[0];
  return calendars[0];
};
