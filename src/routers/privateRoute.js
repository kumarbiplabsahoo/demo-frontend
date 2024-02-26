// PrivateRoute.js
import React from "react";
import { Outlet, Navigate } from "react-router-dom";

const PrivateRoute = () => {
  let isAuthenticated = localStorage.getItem("token");
  return isAuthenticated ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRoute;
