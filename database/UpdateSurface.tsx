import firebase from 'firebase'

export const updateSurface = (surface: number) => {

    firebase.auth().signInAnonymously().catch(function(error) {
        console.log('error:' + error.code)
    });

    firebase.auth().onAuthStateChanged(function(user) {
        if (user) {
          const uid = user.uid;
          const db = firebase.firestore()
          db.collection(uid).doc('surface').set({
            value: surface
          })
            .then(() => {
              console.log('update surface success')
            })
            .catch((error) => {
              console.log(error)
            })
        } else {
          console.log('error...')
        }
      });
}