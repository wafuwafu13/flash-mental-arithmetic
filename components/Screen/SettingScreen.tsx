import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import firebase from 'firebase';
import { Header, Card, Divider } from 'react-native-elements';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp
} from 'react-native-responsive-screen';

import SurfaceSetting from '../Setting/SurfaceSetting';
import SheetSetting from '../Setting/SheetSetting';
import DigitSetting from '../Setting/DigitSetting';
import IntervalSetting from '../Setting/IntervalSetting';

import BackArrow from '../../elements/BackArrow';

import { RootStackParamList } from '../../App';
import { StackNavigationProp } from '@react-navigation/stack';

type NavigationProp = StackNavigationProp<RootStackParamList, 'Setting'>;

type Props = {
    navigation: NavigationProp;
};

const SettingScreen: React.FC<Props> = ({ navigation }) => {
    const [currentSurface, setCurrentSurface] = useState<number | undefined>();
    const [currentSheet, setCurrentSheet] = useState<number | undefined>();
    const [currentDigit, setCurrentDigit] = useState<number | undefined>();
    const [currentInterval, setCurrentInterval] = useState<number | undefined>();

    const db = firebase.firestore();
    const auth: any = firebase.auth();
    let docRef = db.collection(auth.currentUser.uid);

    docRef
        .doc('surface')
        .get()
        .then((doc: any) => {
            if (doc.exists) {
                setCurrentSurface(doc.data().value);
            } else {
                setCurrentSurface(1);
            }
        });

    docRef
        .doc('sheet')
        .get()
        .then((doc: any) => {
            if (doc.exists) {
                setCurrentSheet(doc.data().value);
            } else {
                setCurrentSheet(10);
            }
        });

    docRef
        .doc('digit')
        .get()
        .then((doc: any) => {
            if (doc.exists) {
                setCurrentDigit(doc.data().value);
            } else {
                setCurrentDigit(1);
            }
        });

    docRef
        .doc('interval')
        .get()
        .then((doc: any) => {
            if (doc.exists) {
                setCurrentInterval(doc.data().value);
            } else {
                setCurrentInterval(1000);
            }
        });

    return (
        <View style={styles.container}>
            <Header
                leftComponent={
                    <BackArrow type="setting" onPress={() => navigation.navigate('Home')} />
                }
                centerComponent={{
                    text: '設 定',
                    style: { color: '#fff', fontSize: wp('5%'), paddingBottom: wp('1%') }
                }}
                backgroundColor="#FF4FC3"
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
    );
};

export default SettingScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f8f8f8'
    },
    wrapper: {
        marginTop: wp('10%')
    }
});
