import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Header, Divider } from 'react-native-elements';
import firebase from 'firebase';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

import RecordList from '../RecordList';

import BackArrow from '../../elements/BackArrow';

import { RootStackParamList } from '../../App';
import { StackNavigationProp } from '@react-navigation/stack';

type RecordScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'Record'
>;

type Props = {
    navigation: RecordScreenNavigationProp;
}

// type Record = [{
//     date: any
//     digit: number
//     interval: number
//     key: string
//     result: string
//     sheet: number
//     surface: number
// }]

const RecordScreen: React.FC<Props> = ({ navigation }) => {

    const [recordList, setRecordList] = useState<{[key: string]: number | string}[]>([])

    useEffect(() => {
        const auth: any= firebase.auth()
        const db = firebase.firestore()
        let docRef = db.collection(`records/${auth.currentUser.uid}/record`)
        docRef.orderBy('date', 'desc').get().then((records) => {
            let recordList: {[key: string]: number | string}[] = []
            records.forEach((doc) => {
                recordList.push({ ...doc.data(), key: doc.id })
            })
            setRecordList(recordList)
        })
        .catch((error) => {
            console.log(error)
        })
    }, [])

    return(
        <View style={styles.container}>
            <Header
              leftComponent={<BackArrow type="record" onPress={() => navigation.goBack()}/>}
              centerComponent={{ text: '記 録', style: { color: '#fff', fontSize: wp('5%')} }}
              backgroundColor='#7244F4'
            />
            <View style={styles.item}>
                <Text style={styles.itemTitle}>日</Text>
                <Text style={styles.itemTitle}>面数</Text>
                <Text style={styles.itemTitle}>枚数</Text>
                <Text style={styles.itemTitle}>桁数</Text>
                <Text style={styles.itemTitle}>間隔</Text>
                <Text style={styles.itemTitle}>結果</Text>
            </View>
            <Divider style={{ height: 3, backgroundColor: 'black' }} />
            <RecordList recordList={recordList}/>
        </View>
    )
}

export default RecordScreen

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    item: {
        flexDirection: 'row',
        justifyContent: 'center',
    },
    itemTitle: {
        flex: 1,
        fontSize: wp('5%'),
        margin: wp('2%')
    }
})