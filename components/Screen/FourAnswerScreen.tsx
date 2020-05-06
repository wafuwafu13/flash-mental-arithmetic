import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableHighlight, TextInput } from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

type Props = {
    onPress: any
    setAnswer: any
    setAnswer2: any
    setAnswer3: any
    setAnswer4: any
}

const FourAnswerScreen = (props: Props) => {

    const { onPress, setAnswer, setAnswer2, setAnswer3, setAnswer4 } = props

    const [isAnswered, setIsAnswered] = useState<boolean>(false)
    const [isAnswered2, setIsAnswered2] = useState<boolean>(false)
    const [isAnswered3, setIsAnswered3] = useState<boolean>(false)
    const [isAnswered4, setIsAnswered4] = useState<boolean>(false)

    const handleAnswer = (input_number: string) => {
        if (input_number) {
            setIsAnswered(true)
            setAnswer(input_number)
        } else {
            setIsAnswered(false)
        }
    }

    const handleAnswer2 = (input_number: string) => {
        if (input_number) {
            setIsAnswered2(true)
            setAnswer2(input_number)
        } else {
            setIsAnswered2(false)
        }
    }

    const handleAnswer3 = (input_number: string) => {
        if (input_number) {
            setIsAnswered3(true)
            setAnswer3(input_number)
        } else {
            setIsAnswered3(false)
        }
    }

    const handleAnswer4 = (input_number: string) => {
      if (input_number) {
          setIsAnswered4(true)
          setAnswer4(input_number)
      } else {
          setIsAnswered4(false)
      }
  }

    return(
        <View style={styles.container}>
            <Text style={styles.text}>
                回答を入力してください。
            </Text>
            <Text style={styles.answerText}>
                回答１
            </Text>
            <TextInput
              keyboardType = 'numeric'
              onChangeText={handleAnswer}
              style={styles.input} 
              maxLength={6}
            />
            <Text style={styles.answerText}>
                回答２
            </Text>
            <TextInput
              keyboardType = 'numeric'
              onChangeText={handleAnswer2}
              style={styles.input} 
              maxLength={6}
            />
            <Text style={styles.answerText}>
                回答３
            </Text>
            <TextInput
              keyboardType = 'numeric'
              onChangeText={handleAnswer3}
              style={styles.input} 
              maxLength={6}
            />
            <Text style={styles.answerText}>
                回答４
            </Text>
            <TextInput
              keyboardType = 'numeric'
              onChangeText={handleAnswer4}
              style={styles.input} 
              maxLength={6}
            />
            { isAnswered && isAnswered2 && isAnswered3 && isAnswered4 &&(
                <TouchableHighlight
                  onPress={onPress}
                  style={styles.button}
                  activeOpacity={0.7}
                  underlayColor={'#B73C8D'}
                >
                    <Text style={styles.buttonText}>
                        回答
                    </Text>
              </TouchableHighlight>
            )}
        </View>
    )
}

export default FourAnswerScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: wp('5%'),
        alignItems: 'center',
        backgroundColor: '#1B1A1A'
    },
    text: {
        fontSize: wp('5%'),
        marginBottom: hp('2%'),
        color: '#fff'
    },
    answerText: {
        fontSize: wp('4%'),
        marginBottom: hp('1%'),
        color: '#fff'
    },
    input: {
        backgroundColor: '#eee',
        height: hp('7%'),
        width: wp('20%'),
        marginBottom: hp('1%'),
        borderWidth: wp('0.3%'),
        borderColor: '#DDD',
        padding: wp('1%')
    },
    button: {
        width: wp('40%'),
        height: hp('5%'),
        marginTop: hp('1%'),
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 4,
        backgroundColor: '#FF4FC3'
    },
    buttonText: {
        color: '#fff',
        fontSize: wp('5%')
    }
})