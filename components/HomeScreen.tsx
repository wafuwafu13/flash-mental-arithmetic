import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import firebase from 'firebase';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

import HomeTitle from '../elements/HomeTitle';
import HomeButton from '../elements/HomeButton';

const HomeScreen = ({ navigation }: any) => {

    const [surface, setSurface] = useState<any>()

    const db = firebase.firestore()
    const auth: any= firebase.auth()
    console.log(auth)
    //let docRef = db.collection(auth.currentUser.uid).doc('surface')
    // docRef.get().then((doc: any) => {
    //     let surface = doc.data().value
    //     console.log(surface)
    //     setSurface(surface)
    // })
    // .catch((error) => {
    //     console.log(error)
    // })

    return(
        <View style={styles.container}>
            <View style={styles.title}>
                <HomeTitle />
            </View>
            <View style={styles.button}>  
                <HomeButton type='start' onPress={() => navigation.navigate('Start')}>
                    スタート
                </HomeButton>
                <HomeButton type='setting' onPress={() => navigation.navigate('Setting')}>
                    設 定
                </HomeButton>
            </View>
        </View>
    )
}

export default HomeScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#1B1A1A',
        alignItems: 'center'
    },
    title: {
        flex: 1,
        top: wp('35%')
    },
    button: {
        flex: 1
    }
})