import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// const firebaseConfig = {
//     apiKey: "AIzaSyCYizDoOIaOoSvNDVDlDsYg00QOtT9kAW8",  
//     authDomain: "liveness-4dece.firebaseapp.com",
//     projectId: "liveness-4dece",
//     storageBucket: "liveness-4dece.firebasestorage.app",
//     messagingSenderId: "308456137518",
//     appId: "1:308456137518:web:c081bc9a5362045e6b10bf"
// };

const firebaseConfig = {
    apiKey: "AIzaSyCpRzgkYz5ccpBlozHZKaHWSTOAuvnIMPE",
    authDomain: "fir-5b243.firebaseapp.com",
    projectId: "fir-5b243",
    storageBucket: "fir-5b243.firebasestorage.app",
    messagingSenderId: "829803325657",
    appId: "1:829803325657:web:73fde80fcfd62bfe1876c8",
    measurementId: "G-5ND0C8QLGK"
  };
  

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
auth.languageCode = 'it';

export { auth };
