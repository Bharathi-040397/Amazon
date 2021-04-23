import firebase from "firebase";
const firebaseConfig = {
    apiKey: "AIzaSyDSM11ErpwO-hf5u2Jrdf3AAft9kLokcD8",
    authDomain: "fir-d53be.firebaseapp.com",
    databaseURL: "https://fir-d53be.firebaseio.com",
    projectId: "fir-d53be",
    storageBucket: "fir-d53be.appspot.com",
    messagingSenderId: "711840868373",
    appId: "1:711840868373:web:db71d5c30d3107cf6dc61c",
    measurementId: "G-5XHFW83C4E"
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };