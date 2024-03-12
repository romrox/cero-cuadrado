// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBAN9urk_MDi9C5NaNC74R6tPa-6cvxCKE",
  authDomain: "cero-cuadrado.firebaseapp.com",
  projectId: "cero-cuadrado",
  storageBucket: "cero-cuadrado.appspot.com",
  messagingSenderId: "843319014627",
  appId: "1:843319014627:web:b75c9e87c5b3e7dd2f41d6",
};

const firebaseApp = initializeApp(firebaseConfig);

const auth = getAuth(firebaseApp);

export { auth };
