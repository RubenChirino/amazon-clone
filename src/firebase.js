import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAW_m-We8q58eE4aZoeMUp6aKXilzbVmVc",
  authDomain: "challenge-66486.firebaseapp.com",
  databaseURL: "https://challenge-66486.firebaseio.com",
  projectId: "challenge-66486",
  storageBucket: "challenge-66486.appspot.com",
  messagingSenderId: "928200551656",
  appId: "1:928200551656:web:3c2603704035e981ca2d5d",
  measurementId: "G-3NCKVM1D2X",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
