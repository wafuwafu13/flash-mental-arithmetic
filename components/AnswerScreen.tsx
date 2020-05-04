import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableHighlight, TextInput } from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

type Props = {
    onPress: any
    setAnswer: any
}

const AnswerScreen = (props: Props) => {

    const { onPress, setAnswer } = props

    const [isAnswered, setIsAnswered] = useState<boolean>(false)

    const handleAnswer = (input_number: string) => {
        if (input_number) {
            setIsAnswered(true)
            setAnswer(input_number)
        } else {
            setIsAnswered(false)
        }
    }

    return(
        <View style={styles.container}>
             <Text style={styles.text}>回答を入力してください。</Text>
             <TextInput
              keyboardType = 'numeric'
              onChangeText={handleAnswer}
              style={styles.input} 
              maxLength={6}
            />
            { isAnswered && (
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

export default AnswerScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    text: {
        fontSize: wp('5%'),
        marginBottom: hp('5%')
    },
    input: {
        backgroundColor: '#eee',
        height: hp('7%'),
        width: wp('20%'),
        marginBottom: hp('7%'),
        borderWidth: wp('0.3%'),
        borderColor: '#DDD',
        padding: wp('1%')
    },
    button: {
        width: wp('40%'),
        height: hp('5%'),
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