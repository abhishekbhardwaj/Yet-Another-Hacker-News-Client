import firebase from 'firebase';
import { baseUrl } from './api';

// Setup Firebase SDK initially as an anonymous client
const firebaseApp = firebase.initializeApp({
    databaseURL: baseUrl
});

export default (firebaseApp.database());
