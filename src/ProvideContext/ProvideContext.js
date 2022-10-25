import React, { createContext } from "react";

export const AuthContext = createContext();
const ProvideContext = ({ children }) => {
  const user = {
    name: "topu",
  };
  const authInfo = { user };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default ProvideContext;
