import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

import "./firebase.utils";

export const login = async (email, password) => {
  try {
    const auth = getAuth();

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(user)
        return user;
        // ...
      })
      .catch((error) => {
          console.log(error)
        const errorCode = error.code;
        const errorMessage = error.message;
      });
  } catch (error) {
    console.log(error);
  }
};
