import firebase from "firebase";
import "firebase/firestore";

firebase.initializeApp({
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: "portfolio-1738.firebaseapp.com",
    databaseURL: "https://portfolio-1738.firebaseio.com",
    projectId: "portfolio-1738",
    storageBucket: "portfolio-1738.appspot.com",
    messagingSenderId: "30560749165",
    appId: "1:30560749165:web:5bd677c8def1525bb12164",
    measurementId: "G-GTE1LSVW9L",
});

let db = firebase.firestore();
let storage = firebase.storage();
let auth = firebase.auth();

export default {
    firebase,
    storage,
    db,
    auth,
};
