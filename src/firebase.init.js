// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey:process.env.REACT_APP_apiKey,
  authDomain:process.env.REACT_APP_authDomain,
  projectId:process.env.REACT_APP_projectId,
  storageBucket:process.env.REACT_APP_storageBucket,
  messagingSenderId:process.env.REACT_APP_messagingSenderId,
  appId:process.env.REACT_APP_appId,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;


// apiKey: "AIzaSyA8WO_EBgtGswu_8LNt9W1jJrzrNvySqgY",
// authDomain: "fruits-warehouse-b639e.firebaseapp.com",
// projectId: "fruits-warehouse-b639e",
// storageBucket: "fruits-warehouse-b639e.appspot.com",
// messagingSenderId: "559194693474",
// appId: "1:559194693474:web:91275934bf41785d4ed63b"
