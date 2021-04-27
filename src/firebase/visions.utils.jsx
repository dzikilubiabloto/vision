import firebase from "firebase/app";
import "firebase/firestore";
import { doc, setDoc } from "firebase/firestore";
import { collection, query, where, getDocs } from "firebase/firestore";

const db = firebase.firestore();

const addVision = async (name, text, visible = true) => {
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

/*
const getVision = () => {
  // check if vision ith this name exists

  // add vision
  firestore.collection("visions");
};*/

const getVisions = async () => {
  // check if vision ith this name exists

  const q = query(collection(db, "visions"), where("visible", "==", true));

  const documents = [];
  const querySnapshot = await getDocs(q);

  try {
    querySnapshot.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots
      console.log(doc.id, " => ", doc.data());
      documents.push({ id: doc.id, data: doc.data });
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

module.export({ addVision, getVisions, deleteVision });
