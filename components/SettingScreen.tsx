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
        setCurrentSurface(settingList[3])
        setCurrentSheet(settingList[2])
        setCurrentDigit(settingList[0])
        setCurrentInterval(settingList[1])
    })
    .catch((error) => {
        console.log(error)
    })

    return(
        <View style={styles.container}>
            <Header
              leftComponent={<BackArrow onPress={() => navigation.navigate('Home')} />}
              centerComponent={{ text: '設 定', style: { color: '#fff', fontSize: wp('5%'), paddingBottom: wp('1%')} }}
              backgroundColor='#7244F4'
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
        backgroundColor: '#FFFBFB'
    },
    wrapper: {
        marginTop: wp('10%')
    }
})