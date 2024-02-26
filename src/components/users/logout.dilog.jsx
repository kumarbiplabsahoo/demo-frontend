import React from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

const LogoutDialog = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogout = () => {
    try {
      localStorage.removeItem("token");
      localStorage.removeItem("user");
      localStorage.removeItem("loginTimestamp");
      navigate("/login");

      dispatch({
        type: "ADD_API_ALERT",
        payload: {
          severity: "success",
          message: "Logout successful!",
        },
      });
    } catch (error) {
      console.error("Logout failed:", error);

      dispatch({
        type: "ADD_API_ALERT",
        payload: {
          severity: "error",
          message: "Logout failed. Please try again.",
        },
      });
    }
  };

  return (
    <div>
      <p>Are you sure you want to logout?</p>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default LogoutDialog;
