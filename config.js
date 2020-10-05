import firebase from 'firebase';
require('@firebase/firestore')

var firebaseConfig = {
  apiKey: "AIzaSyBbjVpewDDGk1R_uUfdasyT0d2ItW1BLsU",
  authDomain: "barter-app-906a5.firebaseapp.com",
  databaseURL: "https://barter-app-906a5.firebaseio.com",
  projectId: "barter-app-906a5",
  storageBucket: "barter-app-906a5.appspot.com",
  messagingSenderId: "1032643897319",
  appId: "1:1032643897319:web:b72392fb3e3221b07eff42"
};
  // Initialize Firebase

  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore();
