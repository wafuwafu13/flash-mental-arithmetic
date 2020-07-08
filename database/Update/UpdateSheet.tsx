import firebase from 'firebase';

export const updateSheet = (sheet: number) => {
    firebase.auth().onAuthStateChanged(function (user) {
        if (user) {
            const uid = user.uid;
            const db = firebase.firestore();
            db.collection(uid)
                .doc('sheet')
                .set({
                    value: sheet
                })
                .then(() => {
                    console.log('update sheet success');
                })
                .catch((error) => {
                    console.log(error);
                });
        } else {
            console.log('error...');
        }
    });
};
