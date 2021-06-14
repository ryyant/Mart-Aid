import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";
// import {
//     API_KEY,
//     AUTH_DOMAIN,
//     DATABASE_URL,
//     PROJECT_ID,
//     STORAGE_BUCKET,
//     MESSAGING_SENDER_ID,
//     APP_ID,
//     MEASUREMENT_ID
// } from ".env";

// const firebaseConfig = {
//     apiKey: API_KEY,
//     authDomain: AUTH_DOMAIN,
//     databaseURL: DATABASE_URL,
//     projectId: PROJECT_ID,
//     storageBucket: STORAGE_BUCKET,
//     messagingSenderId: MESSAGING_SENDER_ID,
//     appId: APP_ID,
//     measurementId: MEASUREMENT_ID
// }

const firebaseConfig = {
    apiKey: "AIzaSyCGgNbdizaud8qsooCEIc0E1EhDgDgg1HU",
    authDomain: "mart-aid.firebaseapp.com",
    databaseURL: "https://mart-aid-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "mart-aid",
    storageBucket: "mart-aid.appspot.com",
    messagingSenderId: "347341631298",
    appId: "1:347341631298:web:b4ad63c66b2daebb65e2db",
    measurementId: "G-WG1L2Z5XEV"
  };

const firebaseApp = !firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();

export default firebaseApp;
