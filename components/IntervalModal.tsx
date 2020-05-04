import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableHighlight, TextInput } from 'react-native';
import { Header } from 'react-native-elements';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

import BackArrow from '../elements/BackArrow';

type Props = {
    onPressDecision: any
    onPressBack: any
    changeValue: any
}

const IntervalModal = (props: Props) => {

    const { onPressDecision, onPressBack, changeValue } = props

    const [isValidated, setIsValidated] = useState<boolean>(false)

    let validateList: number[] = []
    for (let i = 100; i <= 2000; i++) {
        validateList.push(i)
    } 

    const handleInterval = (number: string) => {
        const input_number = Number(number)
        const index = validateList.findIndex(number => number == input_number)
        if (index === -1) {
            setIsValidated(false)
        } else {
            setIsValidated(true)
            changeValue(number)
        }
    }

    return(
        <View style={styles.modal}>
            <Header
              leftComponent={<BackArrow onPress={onPressBack} />}
              centerComponent={{ text: '枚数', style: { color: '#fff', fontSize: wp('5%')} }}
              backgroundColor='#7244F4'
            />
            <Text style={styles.text}>100~2000の数字を入力してください。</Text>
            <TextInput
              keyboardType = 'numeric'
              onChangeText={handleInterval}
              maxLength={4}
              style={styles.input} 
            />
            { isValidated && (
                <TouchableHighlight
                  onPress={onPressDecision}
                  style={styles.button}
                >
                    <Text style={styles.buttonText}>
                        決 定
                    </Text>
                </TouchableHighlight>
            )}
        </View>
    )
}

export default IntervalModal;

const styles = StyleSheet.create({
    modal: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#FFFBFB',
    },
    text: {
        marginTop: wp('10%'),
        fontSize: wp('5%'),
        marginBottom: hp('5%')
    },
    input: {
        backgroundColor: '#eee',
        height: hp('7%'),
        width: wp('15%'),
        marginBottom: hp('7%'),
        borderWidth: wp('0.3%'),
        borderColor: '#DDD',
        padding: wp('1%')
    },
    button: {
        width: wp('65%'),
        height: hp('5%'),
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