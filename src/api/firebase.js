import firebase from 'firebase/app';
import 'firebase/firestore';
import { Platform } from 'react-native';

// iOS Firebase Config
const firebaseConfigIOS = {
    apiKey: "AIzaSyCTZukoAPTd5XKw--Hb1vUDk_ItJZ1_Ca8",
    authDomain: "atlsfw-app.firebaseapp.com",
    projectId: "atlsfw-app",
    storageBucket: "atlsfw-app.appspot.com",
    messagingSenderId: "351726786712",
    appId: "1:351726786712:ios:d4d899a57d18d998e958ed",
};


// Android Firebase Config
const firebaseConfigAndroid = {
    apiKey: "AIzaSyBU-8wOhGqKW6eayDusw0VgTtli6OhVd6Q",
    authDomain: "atlsfw-app.firebaseapp.com",
    projectId: "atlsfw-app",
    storageBucket: "atlsfw-app.appspot.com",
    messagingSenderId: "351726786712",
    appId: "1:351726786712:android:c2985d8c4a583cefe958ed",
};

const firebaseConfig = Platform.OS === 'ios' ? firebaseConfigIOS : firebaseConfigAndroid;

// Initialize Firebase only once
if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

const db = firebase.firestore();

export { db };
