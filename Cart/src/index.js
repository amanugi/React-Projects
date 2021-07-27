import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import firebase from 'firebase/app';
import 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBRpCXhJQKMXfI2Vim9Atn-h8_hCEFnJ5w",
    authDomain: "cart-cfca8.firebaseapp.com",
    projectId: "cart-cfca8",
    storageBucket: "cart-cfca8.appspot.com",
    messagingSenderId: "638047342657",
    appId: "1:638047342657:web:5d280fca3303885426b6c0"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

ReactDOM.render(<App />, document.getElementById('root'));
