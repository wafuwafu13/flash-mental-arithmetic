import React from 'react';
import { StyleSheet, View, Text, TouchableHighlight } from 'react-native';
import { Card, Divider } from 'react-native-elements';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

import { addRecord } from '../database/AddRecord';

const ResultScreen = ({ navigation, route }: any) => {

    const result: string = (route.params.answer == route.params.correctAnswer) ? '成功' : '失敗'

    addRecord(
      route.params.surface,
      route.params.sheet,
      route.params.digit,
      route.params.interval,
      result 
    )

    return(
        <View style={styles.container}>
            { route.params.answer == route.params.correctAnswer ? (
                <Text style={styles.resultSuccess}>
                    成 功
                </Text>
              ) : (
                <Text style={styles.resultFailure}>
                    失 敗
                </Text>
              )
            }
            <Card>
                <Text style={styles.topAnswer}>
                    回答　{route.params.answer}
                </Text>
                <Divider />
                <Text style={styles.answer}>
                    正解　{route.params.correctAnswer}
                </Text>
                <Divider />
            </Card>
            <TouchableHighlight
              onPress={() => navigation.navigate('Home')}
              style={styles.button}
              underlayColor={'#492B9D'}
              activeOpacity={0.7}
            >
                <Text style={styles.buttonText}>
                    ホームへ
                </Text>
            </TouchableHighlight>
        </View>
    )
}

export default ResultScreen

const styles = StyleSheet.create({
    container: {
      marginTop: wp('30%'),
      alignItems: 'center',
      justifyContent: 'center',
    },
    resultSuccess: {
      fontSize: wp('10%'),
      fontWeight: '700',
      color: '#FF4FC3',
    },
    resultFailure: {
      fontSize: wp('10%'),
      fontWeight: '700',
      color: '#62D0E9',
    },
    topAnswer: {
      fontSize: wp('5%'),
      marginTop: wp('2%'),
      marginRight: wp('7%'),
      marginLeft: wp('7%'),
      marginBottom: wp('1%')
    },
    answer: {
      fontSize: wp('5%'),
      marginTop: wp('7%'),
      marginRight: wp('7%'),
      marginLeft: wp('7%'),
      marginBottom: wp('1%')
    },
    button: {
      width: wp('40%'),
      height: hp('5%'),
      marginTop: hp('7%'),
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 4,
      backgroundColor: '#7244F4'
    },
    buttonText: {
      color: '#fff',
      fontSize: wp('5%')
    }
})