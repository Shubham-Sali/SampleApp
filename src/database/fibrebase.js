import * as firebase from 'firebase';

var firebaseConfig = {
    apiKey: "AIzaSyCmSUENYtzoqaMj-cB-1FpbM3kmSZyKA90",
    authDomain: "reactnativedemo-2f613.firebaseapp.com",
    databaseURL: "https://reactnativedemo-2f613.firebaseio.com",
    projectId: "reactnativedemo-2f613",
    storageBucket: "reactnativedemo-2f613.appspot.com",
    messagingSenderId: "647026371641",
    appId: "1:647026371641:web:ab688b5fab14928db371e8",
    measurementId: "G-PFRNVTK375"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

export default firebase;