import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableHighlight, TextInput } from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

type Props = {
    onPress: any
    setAnswer: any
    setAnswer2: any
}

const TwoAnswerScreen = (props: Props) => {

    const { onPress, setAnswer, setAnswer2 } = props

    const [isAnswered, setIsAnswered] = useState<boolean>(false)
    const [isAnswered2, setIsAnswered2] = useState<boolean>(false)

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

    return(
        <View style={styles.container}>
            <Text style={styles.text}>回答を入力してください。</Text>
            <TextInput
              keyboardType = 'numeric'
              onChangeText={handleAnswer}
              style={styles.input} 
            />
            <TextInput
              keyboardType = 'numeric'
              onChangeText={handleAnswer2}
              style={styles.input} 
            />
            { isAnswered && isAnswered2 &&(
                <TouchableHighlight
                  onPress={onPress}
                  style={styles.button}
                >
                    <Text style={styles.buttonText}>
                        回答
                    </Text>
              </TouchableHighlight>
            )}
        </View>
    )
}

export default TwoAnswerScreen

const styles = StyleSheet.create({
    container: {
        bottom: wp('30%'),
        alignItems: 'center'
    },
    text: {
        fontSize: wp('5%'),
        marginBottom: hp('5%')
    },
    input: {
        backgroundColor: '#eee',
        height: hp('7%'),
        width: wp('30%'),
        marginBottom: hp('2%'),
        borderWidth: wp('0.3%'),
        borderColor: '#DDD',
        padding: wp('1%')
    },
    button: {
        width: wp('40%'),
        height: hp('5%'),
        marginTop: hp('2%'),
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