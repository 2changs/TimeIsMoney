import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

const prodConfig = {
  apiKey: "AIzaSyD8IzlxXkg1uOnEQrQj-mpoAqNDuY6hF6g",
    authDomain: "vinder-ded6d.firebaseapp.com",
    databaseURL: "https://vinder-ded6d.firebaseio.com",
    projectId: "vinder-ded6d",
    storageBucket: "vinder-ded6d.appspot.com",
    messagingSenderId: "119268225526"
};

const devConfig = {
  apiKey: "AIzaSyD8IzlxXkg1uOnEQrQj-mpoAqNDuY6hF6g",
    authDomain: "vinder-ded6d.firebaseapp.com",
    databaseURL: "https://vinder-ded6d.firebaseio.com",
    projectId: "vinder-ded6d",
    storageBucket: "vinder-ded6d.appspot.com",
    messagingSenderId: "119268225526"
};

const config = process.env.NODE_ENV === 'production'
  ? prodConfig
  : devConfig;

if (!firebase.apps.length) {
  firebase.initializeApp(config);
}

const db = firebase.database();
const auth = firebase.auth();

export {
  db,
  auth,
};
