import firebase from 'firebase'

export const updateInterval = (interval: number) => {

    firebase.auth().onAuthStateChanged(function(user) {
        if (user) {
          const uid = user.uid;
          const db = firebase.firestore()
          db.collection(uid).doc('interval').set({
            value: interval
          })
            .then(() => {
              console.log('update interval success')
            })
            .catch((error) => {
              console.log(error)
            })
        } else {
          console.log('error...')
        }
      });
}