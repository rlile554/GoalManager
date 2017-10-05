import * as firebase from 'firebase';

const config = {
    apiKey: "AIzaSyDO690tmqF5y5p4s_vNjQjOB2gPu-LP3C0",
    authDomain: "goalmanager-5864f.firebaseapp.com",
    databaseURL: "https://goalmanager-5864f.firebaseio.com",
    projectId: "goalmanager-5864f",
    storageBucket: "",
    messagingSenderId: "362244785319"
};

export const firebaseApp = firebase.initializeApp(config);
