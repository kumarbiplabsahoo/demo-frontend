// AppRouter.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PrivateRoute from "./privateRoute"; // Make sure to import the correct file path
import Login from "../pages/auth/login";
import Signup from "../pages/auth/signup";
import Home from "../pages/home";

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />

        {/* Use PrivateRoute directly as a Route component */}
        <Route element={<PrivateRoute />}>
          <Route path="/" element={<Home />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default AppRouter;
