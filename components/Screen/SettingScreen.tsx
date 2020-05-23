import React, {useState} from 'react';
import { StyleSheet, View } from 'react-native';
import firebase from 'firebase';
import { Header, Card, Divider } from 'react-native-elements';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

import SurfaceSetting from '../Setting/SurfaceSetting';
import SheetSetting from '../Setting/SheetSetting';
import DigitSetting from '../Setting/DigitSetting';
import IntervalSetting from '../Setting/IntervalSetting';

import BackArrow from '../../elements/BackArrow';

import {RootStackParamList} from '../../App';
import { StackNavigationProp } from '@react-navigation/stack';

type NavigationProp = StackNavigationProp<
    RootStackParamList,
    'Setting'
>;

type Props = {
    navigation: NavigationProp;
};

const SettingScreen: React.FC<Props> = ({ navigation }) => {

    const [currentSurface, setCurrentSurface] = useState<number | undefined>()
    const [currentSheet, setCurrentSheet] = useState<number | undefined>()
    const [currentDigit, setCurrentDigit] = useState<number | undefined>()
    const [currentInterval, setCurrentInterval] = useState<number | undefined>()

    const db = firebase.firestore()
    const auth: any = firebase.auth()
    let docRef = db.collection(auth.currentUser.uid)
    docRef.get().then((settings) => {
        let settingList: number[] = []
        settings.forEach((doc) => {
            settingList.push(doc.data().value) // [digit, interval, record, sheet, surface]
        })
        setCurrentSurface(settingList[4] || 1)
        setCurrentSheet(settingList[3] || 10)
        setCurrentDigit(settingList[0] || 1)
        setCurrentInterval(settingList[1] || 1000)
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