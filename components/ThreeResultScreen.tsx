import React from 'react';
import { StyleSheet, View, Text, TouchableHighlight } from 'react-native';
import { Card, Divider } from 'react-native-elements';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

const ResultScreen = ({ navigation, route }: any) => {
    return(
        <View style={styles.container}>
            { route.params.answer == route.params.correctAnswer && 
              route.params.answer2 == route.params.correctAnswer2 &&
              route.params.answer3  == route.params.correctAnswer3 ? (
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
                    １の回答　{route.params.answer}
                </Text>
                <Divider />
                <Text style={styles.answer}>
                    １の正解　{route.params.correctAnswer}
                </Text>
                <Divider />
                <Text style={styles.answer}>
                    ２の回答　{route.params.answer2}
                </Text>
                <Divider />
                <Text style={styles.answer}>
                    ２の正解　{route.params.correctAnswer2}
                </Text>
                <Divider />
                <Text style={styles.answer}>
                    ３の回答　{route.params.answer3}
                </Text>
                <Divider />
                <Text style={styles.answer}>
                    ３の正解　{route.params.correctAnswer3}
                </Text>
            </Card>
            <TouchableHighlight
              onPress={() => navigation.navigate('Home')}
              style={styles.button}
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
    justifyContent: 'center'
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