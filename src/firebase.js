import firebase from 'firebase';
const firebaseConfig = {
    apiKey: "AIzaSyAJ59jQRRRNCnlBzPx-oiMKd0WLvG20T30",
    authDomain: "slack-clone-d2c15.firebaseapp.com",
    projectId: "slack-clone-d2c15",
    storageBucket: "slack-clone-d2c15.appspot.com",
    messagingSenderId: "795145152367",
    appId: "1:795145152367:web:82e9cbc82edb4da58cea9a",
    measurementId: "G-F6RKZ7E9M0"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
