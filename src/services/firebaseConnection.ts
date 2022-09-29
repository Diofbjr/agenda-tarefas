import firebase from 'firebase/app';
import 'firebase/firestore';

let firebaseConfig = {
  apiKey: "AIzaSyCDDKsSuR_3kfpIFQYLLco2-hV5G2nQ4Hc",
  authDomain: "board-15c6e.firebaseapp.com",
  projectId: "board-15c6e",
  storageBucket: "board-15c6e.appspot.com",
  messagingSenderId: "869268755028",
  appId: "1:869268755028:web:38ae99f049cf4d159393c1",
  measurementId: "G-YQKQF5QQK4"
};
// Initialize Firebase
if(!firebase.apps.length){
  firebase.initializeApp(firebaseConfig);
}

export default firebase;
