import firebase from 'firebase';
import ENV from '../../env.json';

export const confirmDatabase = () => {
    require('firebase/firestore');

    const firebaseConfig = {
        apiKey: ENV.FIREBASE_API_KEY,
        authDomain: ENV.FIREBASE_AUTH_DOMAIN,
        databaseURL: ENV.FIREBASE_DB_URL,
        projectId: ENV.FIREBASE_PRJ_ID,
        storageBucket: ENV.FIREBASE_STORAGE,
        messagingSenderId: ENV.FIREBASE_SENDER_ID
    };
    firebase.initializeApp(firebaseConfig);

    firebase
        .auth()
        .signInAnonymously()
        .catch(function (error) {
            console.log('siginInError:' + error.code);
        });
};
