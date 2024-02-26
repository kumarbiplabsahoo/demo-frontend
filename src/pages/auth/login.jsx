import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import LoginSideImage from "../../common/images/pexels-miguel-á-padriñán-2882566.jpg";
import styles from "../../common/css/login.module.css";
import {
  Button,
  IconButton,
  InputAdornment,
  Link,
  TextField,
  Typography,
} from "@mui/material";
import GoogleIcon from "../../common/images/google.png";
import FacebookIcon from "../../common/images/facebook.png";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
// import BasicAlerts from '../components/alert';
import { UserLogin } from "../../actions/auth/authAction";
import { useDispatch } from "react-redux";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });
  const handleinputchange = (event) => {
    const { name, value } = event.target;
    setUserData((userData) => ({ ...userData, [name]: value }));
  };

  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  const handleLogin = () => {
    dispatch(UserLogin(userData, navigate));
  };

  return (
    <div>
      <Box className={styles.boxLogin}>
        <Paper elevation={3} className={styles.customPaper}>
          <div className={styles.halfImage}>
            <img src={LoginSideImage} alt="Side Illustration" />
          </div>
          <div className={styles.halfInput}>
            <Typography variant="h5" gutterBottom>
              Login To Your Account
            </Typography>
            <Typography variant="overline" gutterBottom>
              Don't Have An Account?{" "}
              <Link href="/signup">Sign Up Here!</Link>
            </Typography>

            <form>
              <TextField
                id="outlined-basic"
                className={styles.textfield}
                label="Email"
                variant="outlined"
                name="email"
                onChange={handleinputchange}
                value={userData.email}
                autoComplete="on"
              />

              <TextField
                id="outlined-password"
                className={styles.textfield}
                label="Password"
                autoComplete="on"
                type={showPassword ? "text" : "password"}
                variant="outlined"
                name="password"
                onChange={handleinputchange}
                value={userData.password}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton onClick={togglePasswordVisibility}>
                        {showPassword ? (
                          <VisibilityIcon />
                        ) : (
                          <VisibilityOffIcon />
                        )}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />
              <Link className={styles.forgetPass} href="/forgetpassword">
                Forget Password ?
              </Link>

              <Button
                className={styles.loginButton}
                variant="contained"
                onClick={handleLogin}
              >
                Login
              </Button>
            </form>

            <Typography
              className={styles.orTypography}
              variant="button"
              display="block"
              gutterBottom
            >
              -----OR-----
            </Typography>

            <div className={styles.iconButton}>
              <IconButton aria-label="Google Sign-In">
                <img src={GoogleIcon} alt="Google Icon" />
              </IconButton>

              <IconButton color="primary" aria-label="Facebook Sign-In">
                <img src={FacebookIcon} alt="Facebook Icon" />
              </IconButton>
            </div>
          </div>
        </Paper>
      </Box>
    </div>
  );
};
export default Login;
