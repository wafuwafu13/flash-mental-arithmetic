import firebase from 'firebase'

export const initializeRecord = (uid: string) => {
    const db = firebase.firestore()
    db.collection(uid).doc('record').set({
    })
      .then(() => {
        console.log('initialize record success')
      })
      .catch((error) => {
        console.log(error)
      })
}