import firebase from 'firebase'

export const initializeSheet = (uid: string) => {
    const db = firebase.firestore()
    db.collection(uid).doc('sheet').set({
      value: 10
    })
      .then(() => {
        console.log('initialize sheet success')
      })
      .catch((error) => {
        console.log(error)
      })
}