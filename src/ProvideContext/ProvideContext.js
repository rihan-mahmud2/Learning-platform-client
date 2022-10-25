import React, { createContext } from "react";
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import app from "../firebase/firebase.config";
// import { useState } from "react";

const auth = getAuth(app);
export const AuthContext = createContext();
const ProvideContext = ({ children }) => {
  // const {user, setUser} = useState({})

  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const authInfo = { createUser };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default ProvideContext;
