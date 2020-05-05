import React, {useState} from 'react';
import { StyleSheet, View } from 'react-native';
import firebase from 'firebase';
import { Header, Card, Divider } from 'react-native-elements';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

import SurfaceSetting from './SurfaceSetting';
import SheetSetting from './SheetSetting';
import DigitSetting from './DigitSetting';
import IntervalSetting from './IntervalSetting';

import BackArrow from '../elements/BackArrow';

const SettingScreen = ({ navigation }: any ) => {

    const [currentSurface, setCurrentSurface] = useState<any>()
    const [currentSheet, setCurrentSheet] = useState<any>()
    const [currentDigit, setCurrentDigit] = useState<any>()
    const [currentInterval, setCurrentInterval] = useState<any>()

    const db = firebase.firestore()
    const auth: any= firebase.auth()
    let docRef = db.collection(auth.currentUser.uid)
    docRef.get().then((settings) => {
        let settingList: number[] = []
        settings.forEach((doc) => {
            settingList.push(doc.data().value)
        })
        setCurrentSurface(settingList[4])
        setCurrentSheet(settingList[3])
        setCurrentDigit(settingList[0])
        setCurrentInterval(settingList[1])
    })
    .catch((error) => {
        console.log(error)
    })

    return(
        <View style={styles.container}>
            <Header
              leftComponent={<BackArrow type="setting" onPress={() => navigation.navigate('Home')} />}
              centerComponent={{ text: '設 定', style: { color: '#fff', fontSize: wp('5%'), paddingBottom: wp('1%')} }}
              backgroundColor='#FF4FC3'
            />
            <View style={styles.wrapper}>
                <Card>
                    <SurfaceSetting currentSurface={currentSurface} />
                    <Divider />
                    <SheetSetting currentSheet={currentSheet} />
                    <Divider />
                    <DigitSetting currentDigit={currentDigit} />
                    <Divider />
                    <IntervalSetting currentInterval={currentInterval} />
                </Card>
            </View>
        </View>
    )
}

export default SettingScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f8f8f8'
    },
    wrapper: {
        marginTop: wp('10%')
    }
})