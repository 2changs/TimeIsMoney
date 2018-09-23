import { db } from './firebase';
import firebase from 'firebase/app';
// User API

export const doCreateUser = (id, username, email) =>
  db.ref(`users/${id}`).set({
    username,
    email,
  });

export const onceGetUsers = () =>
  db.ref('users').once('value');

export const getTitle = (val) =>
	db.ref('vol/' + val + '/title').once('value');

export const getDistance = (val) =>
	db.ref('vol/' + val + '/distance').once('value');

export const getImage = (val) =>
	db.ref('vol/' + val + '/img').once('value');

export const getDescp = (val) =>
	db.ref('vol/' + val + '/desc').once('value');

export const getCat = (val) =>
	db.ref('vol/' + val + '/cat').once('value');

export const addVol = (val) => {
	const id = firebase.auth().currentUser.uid;
	db.ref('users/' + id + '/liked/' + val).set("true");
}

export const addCat = (cat) => {
	const id = firebase.auth().currentUser.uid;
	db.ref('users/' + id + '/cat/' + cat).set("true");
}
