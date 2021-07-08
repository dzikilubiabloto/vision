import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import {
  collection,
  query,
  getDocs,
} from "firebase/firestore";

import "./firebase.utils";

const db = firebase.firestore();

// const { encryptString, decryptString } = new StringCrypto();

/*
export const checkPassPhrase = async (pass) => {
  const docRef = doc(db, "test", "test");
  const docSnap = await getDoc(docRef);

  let text = docSnap.data().test;
  text = decryptString(text, pass);

  text = text.split(" ");
  const nums = [];

  for (let t of text) {
    nums.push(t.length);
  }
  const check = nums.join("");

  if (check === "58331493436337242226533434843523418") {
    return true;
  } else {
    return false;
  }
};

export const doBackupIfNeeded = async (collectionI, id, nevtext, pass) => {
  try {
    const docRef = doc(db, collectionI, id);
    const docSnap = await getDoc(docRef);
    const lastSaveDate = docSnap.data().savedate;
    const encryptedText = docSnap.data().text;
    const text = decryptString(encryptedText, pass);
    const nov = Date.now();
    if (
      nov - lastSaveDate > 3600 ||
      text.length - nevtext.length > 1000 ||
      nevtext.length <= 10
    ) {
      await addDoc(collection(docRef, "backups"), {
        savedate: Date.now(),
        text: encryptedText,
      });
      // await addDoc(doc(db, "visions", id, "backup"), {
      //   savedate: nov,
      //   text: encryptedText,
      // });
      // await addDoc(collection(db,'visions').doc(id).collection("backup"), {
      //   savedate: nov,
      //   text: encryptedText,
      // });
      // collection('visions').doc(id).collection("backup")
      // await cd.collection('visions').doc(id).collection("backup")
    }
  } catch (e) {
    console.log(e);
  }
  return true;
};

export const addVision = async (name, text, pass) => {
  // check if vision ith this name exists

  // Add a new document in collection "cities"
  const encryptedText = encryptString(text, pass);

  try {
    if (!(await checkPassPhrase(pass))) {
      // handle it upstairs
      return false;
    }

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
      savedate: Date.now(),
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
    if (!(await checkPassPhrase(pass))) {
      // handle it upstairs
      return false;
    }

    console.log("start")
    doBackupIfNeeded('visions', id, text, pass);

    const ref = await db.collection("visions").doc(id);
    await updateDoc(ref, {
      text: encryptedText,
      savedate: Date.now(),
    });
  } catch (e) {
    console.error("Error adding vision document: ", e);
  }
}; */

export const getQuestions = async () => {
  // check if vision ith this name exists

  const q = query(collection(db, "questions"));

  const documents = [];
  //   if (!(await checkPassPhrase(pass))) {
  //     // handle it upstairs
  //     return [];
  //   }
  const querySnapshot = await getDocs(q);

  try {
    querySnapshot.forEach(async (docD) => {
      // doc.data() is never undefined for query doc snapshots
      const q3 = query(collection(db,'questions', docD.id, 'answers'));
      const ans = await getDocs(q3)
      const ansDict = {};
      ans.forEach(async (doc3) => {
        ansDict[doc3.data().user] = {
          ...doc3.data()
        }

      })

      documents.push({
        ...docD.data(),
        id: docD.id,
        answers: ansDict
      });
    });
  } catch (e) {
    console.error("Error reading vision document: ", e);
  }

  return documents;
};
