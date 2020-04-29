import firebase from 'firebase'

export const initializeDigit = (uid: string) => {
    const db = firebase.firestore()
    db.collection(uid).doc('digit').set({
      value: 1
    })
      .then(() => {
        console.log('initialize digit success')
      })
      .catch((error) => {
        console.log(error)
      })
}