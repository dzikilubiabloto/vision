import React, { useContext, createContext, useState, useEffect } from "react";

import {
  getAuth,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";

import "../firebase/firebase.utils";

const AuthContext = createContext();
const auth = getAuth();


export function useAuth() {
  return useContext(AuthContext);
}

export default function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState();
  const [loading, setLoading] = useState(true);
  const value = {
    currentUser,
    signin,
    logout,
  };

  function signin(email, password) {
      console.log("function?")
      console.log(signInWithEmailAndPassword(auth, email, password))
    return signInWithEmailAndPassword(auth, email, password)
  };

  function logout(email, password) {
      return signOut(auth);
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth,  (user) => {
      setCurrentUser(user);
      setLoading(false);

    });
    return unsubscribe;
  }, []);

  return <AuthContext.Provider value={value}>{!loading && children}</AuthContext.Provider>;
}
