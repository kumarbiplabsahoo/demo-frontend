import Api from "../../helpers/Api";

export const UserLogin = (userData, navigate) => {
  return async (dispatch) => {
    try {
      const response = await Api.post(`login`, userData);
      // console.log("Response:", response.data);

      const { message, status, token, user } = response?.data;
      // const loginData = response?.data;

      if (status === 200) {
        localStorage.setItem("token", token);
        localStorage.setItem("user", JSON.stringify(user));
        localStorage.setItem("loginTimestamp", Date.now());

        navigate("/");
        dispatch({
          type: "ADD_API_ALERT",
          payload: {
            severity: "success",
            message: message,
          },
        });
      } else {
        dispatch({
          type: "ADD_API_ALERT",
          payload: {
            severity: "error",
            message: "login Failed",
          },
        });
      }
    } catch (error) {
      console.error("Login Error:", error);
      // Dispatch an error action with a generic error message
      dispatch({
        type: "ADD_API_ALERT",
        payload: {
          severity: "error",
          message: "server error",
        },
      });
      // toast.error("Something went wrong");
    }
  };
};

export const UsersignUp = (userData, navigate) => {
  return async (dispatch) => {
    try {
      const response = await Api.post(`createUser`, userData);
      // console.log("Response:", response.data);

    //   const { status, message, data } = response?.data;
      const signupData = response?.data;

      if (signupData.status === 201) {
        navigate("/login");
        dispatch({
          type: "ADD_API_ALERT",
          payload: {
            severity: "success",
            message: signupData.message,
          },
        });
      } else {
        dispatch({
          type: "ADD_API_ALERT",
          payload: {
            severity: "error",
            message: "signup Failed",
          },
        });
      }
    } catch (error) {
      console.error("Login Error:", error);
      // Dispatch an error action with a generic error message
      dispatch({
        type: "ADD_API_ALERT",
        payload: {
          severity: "error",
          message: "server error",
        },
      });
      // toast.error("Something went wrong");
    }
  };
};
