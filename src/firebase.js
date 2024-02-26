// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBMj-f4SF4ttt83xCfQi1FY_8BrhuY0huU",
  authDomain: "fir-frontend-f3a48.firebaseapp.com",
  projectId: "fir-frontend-f3a48",
  storageBucket: "fir-frontend-f3a48.appspot.com",
  messagingSenderId: "324832530935",
  appId: "1:324832530935:web:5683bd66213de510de5ef2",
  measurementId: "G-66MXPNMY3S"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const storage = getStorage(app);

export default storage;