import firebase from 'firebase'

export const addRecord = (surface: number, sheet: number, digit: number, interval: number, result: string) => {

    firebase.auth().onAuthStateChanged(function(user) {
        if (user) {
          const uid = user.uid;
          const db = firebase.firestore()
          db.collection(`records/${uid}/record`).add({
              date: firebase.firestore.FieldValue.serverTimestamp(),
              surface: surface,
              sheet: sheet,
              digit: digit,
              interval: interval,
              result: result
          })
            .then(() => {
              console.log('add record success')
            })
            .catch((error) => {
              console.log(error)
            })
        } else {
          console.log('error...')
        }
      });
}