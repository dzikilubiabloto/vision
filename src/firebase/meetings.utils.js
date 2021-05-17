import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import { addDoc, updateDoc } from "firebase/firestore";
import { collection, query, getDocs } from "firebase/firestore";

import "./firebase.utils";
import StringCrypto from "string-crypto";

const db = firebase.firestore();
const { encryptString, decryptString } = new StringCrypto();
export const saveMinutes = async (
  { number, facilitator, date, short, text },
  pass
) => {
  // check if vision ith this name exists

  const encryptedText = encryptString(text, pass);
  const encryptedFacilitator = encryptString(facilitator, pass);
  const encryptedShort = encryptString(short, pass);

  // Add a new document in collection "cities"
  try {
    await addDoc(collection(db, "minutes"), {
      number,
      facilitator: encryptedFacilitator,
      date,
      short: encryptedShort,
      text: encryptedText,
    });
  } catch (e) {
    console.error("Error adding vision document: ", e);
  }
};

export const saveAgenda = async (id, text, pass) => {
  // check if vision ith this name exists
  const encryptedText = encryptString(text, pass);

  // Add a new document in collection "cities"
  try {
    const ref = await db.collection("agenda").doc(id);
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

export const getAgenda = async (pass) => {
  // check if vision ith this name exists

  const q = query(collection(db, "agenda"));

  const documents = [];
  const querySnapshot = await getDocs(q);

  try {
    querySnapshot.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots
      documents.push({
        ...doc.data(),
        id: doc.id,
        text: decryptString(doc.text, pass),
      });
    });
  } catch (e) {
    console.error("Error reading vision document: ", e);
  }

  return documents[0];
};

export const getMinutes = async (pass) => {
  // check if vision ith this name exists

  const q = query(collection(db, "minutes"));

  const documents = [];
  const querySnapshot = await getDocs(q);

  try {
    await querySnapshot.forEach(async (doc) => {
      // doc.data() is never undefined for query doc snapshots
      console.log(doc);
      documents.push({
        ...doc.data(),
        id: doc.id,
        text: doc.data().text && (await decryptString(doc.data().text, pass)),
        facilitator:
          doc.data().facilitator &&
          (await decryptString(doc.data().facilitator, pass)),
        short: doc.data().short && decryptString(doc.data().short, pass),
      });
    });
  } catch (e) {
    console.error("Error reading vision document: ", e);
  }
  console.log("utils");
  console.log(documents);
  console.log(typeof documents);
  for (let m in documents) {
    console.log("pp3");
    console.log(m);
  }
  console.log("utils end");

  const gg = ["m", "n", "o", "p", "q", "r"];
  console.log("GGGGGGGGGGGGGGG");
  console.log(gg);
  for (const m in gg) {
    console.log("pp3");
    console.log(m);
  }
  return documents;
};
