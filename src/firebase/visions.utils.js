import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import { updateDoc } from "firebase/firestore";
import {
  collection,
  query,
  where,
  getDocs,
  setDoc,
  doc,
} from "firebase/firestore";

import "./firebase.utils";

import StringCrypto from "string-crypto";

const db = firebase.firestore();

const { encryptString, decryptString } = new StringCrypto();

export const addVision = async (name, text, pass) => {
  // check if vision ith this name exists

  // Add a new document in collection "cities"
  const encryptedText = encryptString(text, pass);

  try {
    // await collection(db, "visions").doc(name).set( {
    //   id: name,
    //   name: name,
    //   text: encryptedText,
    //   visible: true
    // });
    await setDoc(doc(db, "visions", name), {
      id: name,
      name: name,
      text: encryptedText,
      visible: true,
    });
  } catch (e) {
    console.error("Error adding vision document: ", e);
  }
};

export const saveVision = async (id, text, pass) => {
  // check if vision ith this name exists
  const encryptedText = encryptString(text, pass);

  // Add a new document in collection "cities"
  try {
    const ref = await db.collection("visions").doc(id);
    await updateDoc(ref, {
      text: encryptedText,
    });
  } catch (e) {
    console.error("Error adding vision document: ", e);
  }
};

export const getVisions = async (pass) => {
  // check if vision ith this name exists

  const q = query(collection(db, "visions"), where("visible", "==", true));

  const documents = [];
  const querySnapshot = await getDocs(q);

  try {
    querySnapshot.forEach(async (doc) => {
      console.log(doc);
      // doc.data() is never undefined for query doc snapshots
      documents.push({
        id: doc.id,
        name: doc.data().name,
        text: doc.data().text && decryptString(doc.data().text, pass),
      });
    });
  } catch (e) {
    console.error("Error reading vision document: ", e);
  }

  console.log(documents);
  return documents;
};
