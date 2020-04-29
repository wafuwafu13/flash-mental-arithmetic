import firebase from 'firebase'

export const initializeInterval = (uid: string) => {
    const db = firebase.firestore()
    db.collection(uid).doc('interval').set({
      value: 1
    })
      .then(() => {
        console.log('initialize interval success')
      })
      .catch((error) => {
        console.log(error)
      })
}