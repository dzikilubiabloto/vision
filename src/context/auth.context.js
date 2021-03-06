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

// eslint-disable-next-line react/prop-types
export default function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState();
  const [loading, setLoading] = useState(true);
  const value = {
    currentUser,
    signin,
    logout,
  };

  function signin(email, password) {
    return signInWithEmailAndPassword(auth, email, password)
  }

  function logout() {
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
