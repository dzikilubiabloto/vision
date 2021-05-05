import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import { doc, setDoc, updateDoc } from "firebase/firestore";
import { collection, query, where, getDocs } from "firebase/firestore";

import "./firebase.utils";

const db = firebase.firestore();

export const saveDocument = async (id, text) => {
  // check if vision ith this name exists

  // Add a new document in collection "cities"
  try {
    const ref = await db.collection("documents").doc(id);
    await updateDoc(ref, {
      text: text,
    });
  } catch (e) {
    console.error("Error adding vision document: ", e);
  }
};

/*
const getVision = () => {
  // check if vision ith this name exists

  // add vision
  firestore.collection("visions");
};*/

export const getDocument = async () => {
  // check if vision ith this name exists

  const q = query(collection(db, "documents"));
  const q3 = query(collection(db, "test"));

  const documents = [];
  const documents3 = [];

  try {
    const querySnapshot = await getDocs(q);
    const querySnapshot3 = await getDocs(q3);
    querySnapshot.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots
      documents.push({ id: doc.id, ...doc.data() });
    });
    querySnapshot3.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots
      documents3.push({ id: doc.id, ...doc.data() });
    });
  } catch (e) {
    console.error("Error reading vision document: ", e);
  }

  documents[0].test = documents3[0];
  return documents[0];
};

/*
const updateVision = () => {
  // check if vision ith this id exists

  // update vision
  firestore.collection("visions");
};

const deleteVision = () => {
  // check if vision ith this id exists

  // delete vision
  firestore.collection("visions");
};

const getHiddenVisions = () => {
  // check if vision ith this name exists

  // add vision
  firestore.collection("visions");
};

const updateVisionVisible = (visible) => {
  // check if vision ith this name exists

  // add vision
  firestore.collection("visions").where("visible", "==", true);
}; */
