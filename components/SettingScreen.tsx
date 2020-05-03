import React, {useState} from 'react';
import { StyleSheet, View } from 'react-native';
import firebase from 'firebase';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

import SurfaceSetting from './SurfaceSetting';
import SheetSetting from './SheetSetting';
import DigitSetting from './DigitSetting';
import IntervalSetting from './IntervalSetting';

import SettingTitle from '../elements/SettingTitle';
import BackButton from '../elements/BackButton';

const SettingScreen = ({ navigation }: { navigation: any} ) => {

    const [currentSurface, setCurrentSurface] = useState<any>()
    const [currentSheet, setCurrentSheet] = useState<any>()
    const [currentDigit, setCurrentDigit] = useState<any>()
    const [currentInterval, setCurrentInterval] = useState<any>()

    const db = firebase.firestore()
    let docRef = db.collection('u44Eo4syDYMGirlHHr1ty7FLHWt2')
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
            <View style={styles.title}>
                <SettingTitle />
            </View>
            <View style={styles.settingItem}>
                <SurfaceSetting currentSurface={currentSurface} />
                <SheetSetting currentSheet={currentSheet} />
                <DigitSetting currentDigit={currentDigit} />
                <IntervalSetting currentInterval={currentInterval} />
               {/* { settingItemList.map((item, index) => (<SettingItem key={index} item={item} />)) } */}
            </View>
            <View style={styles.backButton}>
                <BackButton onPress={() => navigation.navigate('Home')} />
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
    title: {
        flex: 1,
        top: wp('13%'),
        alignItems: 'center'
    },
    settingItem: {
        bottom: hp('7%'),
        marginLeft: wp('5%')
    },
    backButton: {
        bottom: hp('3%')
    }
})