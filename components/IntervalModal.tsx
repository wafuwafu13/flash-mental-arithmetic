import React from 'react';
import { StyleSheet, View, Text, TouchableHighlight, TextInput } from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

type Props = {
    onPress: any
}

const IntervalModal = (props: Props) => {

    const { onPress } = props

    return(
        <View style={styles.modal}>
            <Text style={styles.text}>表示間隔を入力してください。</Text>
            <TextInput
              style={styles.input} />
            <TouchableHighlight
              onPress={onPress}
            >
                <Text>決定</Text>
            </TouchableHighlight>
        </View>
    )
}

export default IntervalModal;

const styles = StyleSheet.create({
    modal: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#FFFBFB',
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