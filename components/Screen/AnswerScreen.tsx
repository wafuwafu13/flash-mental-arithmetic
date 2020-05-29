import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableHighlight, TextInput } from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

type Props = {
    onPress: () => void
    setAnswer: React.Dispatch<React.SetStateAction<number | undefined>>
}

const AnswerScreen: React.FC<Props> = props => {

    const { onPress, setAnswer } = props

    const [isAnswered, setIsAnswered] = useState<boolean>(false)

    const handleAnswer = (input_number: string): void => {
        const number: number = Number(input_number)
        if (number) {
            setIsAnswered(true)
            setAnswer(number)
        } else {
            setIsAnswered(false)
        }
    }

    return(
        <View style={styles.container}>
            <Text style={styles.text}>
                回答を入力してください。
            </Text>
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

export default AnswerScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: wp('30%'),
        alignItems: 'center',
        backgroundColor: '#1B1A1A'
    },
    text: {
        fontSize: wp('5%'),
        marginBottom: hp('5%'),
        color: '#fff'
    },
    input: {
        backgroundColor: '#eee',
        height: hp('7%'),
        width: wp('20%'),
        marginBottom: hp('7%'),
        borderWidth: wp('0.3%'),
        borderColor: '#DDD',
        padding: wp('1%'),
    },
    button: {
        width: wp('40%'),
        height: hp('5%'),
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 4,
        backgroundColor: '#FF4FC3',
    },
    buttonText: {
        color: '#fff',
        fontSize: wp('5%')
    }
})