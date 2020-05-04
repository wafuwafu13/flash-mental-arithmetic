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

const SurfaceModal = (props: Props) => {

    const { onPressDecision, onPressBack, changeValue } = props

    const [isValidated, setIsValidated] = useState<boolean>(false)

    let validateList: number[] = []
    for (let i = 1; i <= 4; i++) {
        validateList.push(i)
    } 

    const handleSurface = (number: string) => {
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
              centerComponent={{ text: '面数', style: { color: '#fff', fontSize: wp('5%')} }}
              backgroundColor='#7244F4'
            />
            <Text style={styles.text}>1~4の数字を入力してください</Text>
            <TextInput
              keyboardType = 'numeric'
              onChangeText={handleSurface}
              maxLength={1}
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

export default SurfaceModal;

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
        width: wp('10%'),
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