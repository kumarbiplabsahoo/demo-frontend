import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import LoginSideImage from '../common/images/pexels-miguel-á-padriñán-2882566.jpg';
import '../common/css/login.css';
import { Button, IconButton, InputAdornment, Link, TextField, Typography } from '@mui/material';
import GoogleIcon from '../common/images/google.png';
import FacebookIcon from '../common/images/facebook.png';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
// import BasicAlerts from '../components/alert';
import Api from '../helpers/Api'
import { useDispatch } from 'react-redux';


export const Login = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  // const [alertInfo, setAlertInfo] = useState(null);

  const togglePasswordVisibility = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  const handleLogin = async () => {
    try {
      const obj = {
        email: email,
        password: password
      }
      const fetchData = await Api.post(`login`, obj);
      // setUserListings(fetchData?.data)
      if (fetchData) {
        console.log('fetchData', fetchData?.data)

        if (fetchData) {
          dispatch({
            type: 'ADD_API_ALERT',
            payload: {
              severity: 'success',
              message: 'Login successful!'
            }
          });
        }

      }
    } catch (error) {
      console.log(error)

      dispatch({
        type: 'ADD_API_ALERT',
        payload: {
          severity: 'error',
          message: 'Login failed. Please try again.'
        }
      });
    }
  }

  return (
    <div>
      <Box className="boxLogin">
        <Paper elevation={3} className="customPaper">
          <div className="halfImage">
            <img src={LoginSideImage} alt="Side Illustration" />
          </div>
          <div className="halfInput">
            <Typography variant="h5" gutterBottom>
              Login To Your Account
            </Typography>
            <Typography variant="overline" gutterBottom>
              Don't Have An Account? <Link href="/registration">Sign Up Here!</Link>
            </Typography>

            <TextField
              id="outlined-basic"
              label="Email"
              variant="outlined"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />

            <TextField
              id="outlined-password"
              label="Password"
              type={showPassword ? 'text' : 'password'}
              variant="outlined"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton onClick={togglePasswordVisibility}>
                      {showPassword ? <VisibilityIcon /> : <VisibilityOffIcon />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
            <Link className="forgetPass" href="/forgetpassword">Forget Password ?</Link>


            <Button
              className='loginButton'
              variant="contained"
              onClick={handleLogin}
            >
              Login
            </Button>

            <Typography className='orTypography' variant="button" display="block" gutterBottom>
              -----OR-----
            </Typography>

            <div className='iconButton'>
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
