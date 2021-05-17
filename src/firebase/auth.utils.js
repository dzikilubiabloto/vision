import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

import "./firebase.utils";

export const login = async (email, password) => {
  try {
    const auth = getAuth();

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        return user;
        // ...
      })
      .catch((error) => {
        console.log(error);
      });
  } catch (error) {
    console.log(error);
  }
};
