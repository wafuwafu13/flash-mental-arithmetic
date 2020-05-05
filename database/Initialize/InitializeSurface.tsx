import firebase from 'firebase'

export const initializeSurface = (uid: string) => {
    const db = firebase.firestore()
    db.collection(uid).doc('surface').set({
      value: 1
    })
      .then(() => {
        console.log('initialize surface success')
      })
      .catch((error) => {
        console.log(error)
      })
}