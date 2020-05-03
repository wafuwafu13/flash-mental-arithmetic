import React from 'react';
import { StyleSheet, View, Text, TouchableHighlight, TextInput } from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

type Props = {
    onPress: any
    setAnswer: any
    setAnswer2: any
}

const AnswerScreen = (props: Props) => {

    const { onPress, setAnswer, setAnswer2 } = props

    return(
        <View style={styles.container}>
            <Text style={styles.text}>回答を入力してください。</Text>
            <TextInput
              keyboardType = 'numeric'
              onChangeText={number => setAnswer(number)}
              style={styles.input} 
            />
            <TextInput
              keyboardType = 'numeric'
              onChangeText={number => setAnswer2(number)}
              style={styles.input} 
            />
            <TouchableHighlight
              onPress={onPress}
            >
                <Text>決定</Text>
            </TouchableHighlight>
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
    }
})