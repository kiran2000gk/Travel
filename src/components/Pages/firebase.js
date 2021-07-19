import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  // Your firebase credentials

  apiKey: "AIzaSyDovslUbi87TTdqh7XEmUnwKILPzkcLd0E",
  authDomain: "review-3dfef.firebaseapp.com",
  databaseURL: "https://review-3dfef-default-rtdb.firebaseio.com",
  projectId: "review-3dfef",
  storageBucket: "review-3dfef.appspot.com",
  messagingSenderId: "283904280651",
  appId: "1:283904280651:web:26896d3c191e2b07dfa5ce",
});

var db = firebaseApp.firestore();

export { db };
