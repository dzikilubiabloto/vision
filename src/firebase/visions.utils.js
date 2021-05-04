import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import { doc, setDoc, updateDoc } from "firebase/firestore";
import { collection, query, where, getDocs } from "firebase/firestore";

import './firebase.utils';

const db = firebase.firestore();

export const addVision = async (name, text, visible = true) => {
  // check if vision ith this name exists

  // Add a new document in collection "cities"
  try {
    await setDoc(doc(db, "visions"), {
      name,
      text,
      visible,
    });
  } catch (e) {
    console.error("Error adding vision document: ", e);
  }
};



export const saveVision = async (id, text, visible = true) => {
  // check if vision ith this name exists

  // Add a new document in collection "cities"
  try {
    const ref = await db.collection("visions").doc(id)
    console.log("REF")
    console.log(ref)
    await updateDoc(ref, {
      text: text
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

export const getVisions = async () => {
  // check if vision ith this name exists

  const q = query(collection(db, "visions"), where("visible", "==", true));

  const documents = [];
  const querySnapshot = await getDocs(q);

  try {
    querySnapshot.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots
      console.log(doc.id, " => ", doc.data());
      documents.push({ id: doc.id, ...doc.data() });
    });
  } catch (e) {
    console.error("Error reading vision document: ", e);
  }

  return documents;
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

