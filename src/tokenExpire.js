// authHook.js
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const UseAuth = () => {
  const navigate = useNavigate();
  const [loginTimestamp, setLoginTimestamp] = useState(null);

  useEffect(() => {
    const storedLoginTimestamp = localStorage.getItem('loginTimestamp');

    if (storedLoginTimestamp) {
      setLoginTimestamp(Number(storedLoginTimestamp));

      const currentTimestamp = Date.now();
      const eightHoursInMilliseconds = 7000;

      if (currentTimestamp - loginTimestamp > eightHoursInMilliseconds) {
        // Token has expired
        console.log('Token has expired. Logging out...');

        // Perform logout actions
        localStorage.removeItem('token');
        localStorage.removeItem('user');
        localStorage.removeItem('loginTimestamp');

        // Redirect to the login page
        navigate('/');
      }
    }
  }, [navigate, loginTimestamp]);
};

export default UseAuth;



// const [loginTimestamp, setLoginTimestamp] = useState(null);

// useEffect(() => {
//   const storedLoginTimestamp = localStorage.getItem('loginTimestamp');

//   if (storedLoginTimestamp) {
//     setLoginTimestamp(Number(storedLoginTimestamp));

//     const eightHoursInMilliseconds = 8000;

//     const timeoutId = setTimeout(() => {
//       // Perform logout actions
//       localStorage.removeItem('token');
//       localStorage.removeItem('user');
//       localStorage.removeItem('loginTimestamp');

//       // Redirect to the login page
//       navigate('/');
//     }, eightHoursInMilliseconds);

//     return () => {
//       console.log('Cleanup function is running');
//       clearTimeout(timeoutId);
//     };
    
//   }
// }, [navigate]);