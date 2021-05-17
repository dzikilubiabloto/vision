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
        // TODO
        return false;
      });
  } catch (error) {
    return false;
  }
};
