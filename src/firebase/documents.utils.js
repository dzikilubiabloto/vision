import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import { updateDoc } from "firebase/firestore";
import { collection, query, getDocs } from "firebase/firestore";

import StringCrypto from "string-crypto";

import "./firebase.utils";
import { checkPassPhrase } from "./visions.utils";

const db = firebase.firestore();

const { encryptString, decryptString } = new StringCrypto();

export const saveDocument = async (id, text, pass) => {
  // check if vision ith this name exists
  const encryptedText = encryptString(text, pass);

  // Add a new document in collection "cities"
  try {
    if(!await checkPassPhrase(pass)){
      // handle it upstairs
      return false;
    }
    const ref = await db.collection("documents").doc(id);
    await updateDoc(ref, {
      text: encryptedText,
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

export const getDocument = async (pass) => {
  // check if vision ith this name exists

  const q = query(collection(db, "documents"));

  const documents = [];

  try {
    if(!await checkPassPhrase(pass)){
      // handle it upstairs
      return {text: ''};
    }
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots
      documents.push({
        ...doc.data(),
        id: doc.id,
        text: doc.data().text && decryptString(doc.data().text, pass),
      });
    });
  } catch (e) {
    console.error("Error reading vision document: ", e);
  }

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
