import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../ProvideContext/ProvideContext";

const PrivateRoutes = ({ children }) => {
  const location = useLocation();
  const { user } = useContext(AuthContext);
  if (!user) {
    return (
      <Navigate to={"/login"} state={{ from: location }} replace></Navigate>
    );
  }
  return children;
};

export default PrivateRoutes;
