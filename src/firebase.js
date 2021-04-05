// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyABPWGJjbXLzgflsn5t5GsNNeVbOxyySmY",
    authDomain: "techy-7fe67.firebaseapp.com",
    projectId: "techy-7fe67",
    storageBucket: "techy-7fe67.appspot.com",
    messagingSenderId: "65531013786",
    appId: "1:65531013786:web:a83f658317b43d843f8d23",
    measurementId: "G-TN84JFR3CB"
  };


const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

const auth = firebase.auth();


export {db, auth};