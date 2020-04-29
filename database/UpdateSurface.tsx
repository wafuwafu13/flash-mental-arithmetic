import firebase from 'firebase';

export const updateSurface = (surface: number) => {
    const db = firebase.firestore()
        let surfaceRef = db.collection('user1').doc('surface')
        surfaceRef.update({
            value: surface
        })
          .then(() => {
              console.log('success update')
          })
          .catch((error) => {
              console.log('error:' + error)
          })

}