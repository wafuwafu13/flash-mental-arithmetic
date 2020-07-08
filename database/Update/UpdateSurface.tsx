import firebase from 'firebase'

export const updateSurface = (surface: number) => {

    firebase.auth().onAuthStateChanged(function(user) {
        if (user) {
          const uid = user.uid;
          console.log(uid)
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