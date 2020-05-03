import firebase from 'firebase'

export const updateDigit = (digit: number) => {

    firebase.auth().onAuthStateChanged(function(user) {
        if (user) {
          const uid = user.uid;
          const db = firebase.firestore()
          db.collection(uid).doc('digit').set({
            value: digit
          })
            .then(() => {
              console.log('update digit success')
            })
            .catch((error) => {
              console.log(error)
            })
        } else {
          console.log('error...')
        }
      });
}