import React, { useState } from 'react';
import { StyleSheet, View, Text, Modal, TouchableHighlight } from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

import DigitModal from '../components/DigitModal';

import { updateDigit } from '../database/UpdateDigit';

type Props = {
    currentDigit: any
}

const DigitSetting = (props: Props) => {
    
    const [modalVisible, setModalVisible] = useState(false)
    const [digit, setDigit] = useState<any>(null)

    const { currentDigit } = props

    const onPress = () => {
        setModalVisible(!modalVisible)
        updateDigit(digit)
    }

    return(
        <View style={styles.container}>
            <View>
                <Text style={styles.item}>桁数</Text>
            </View> 
            <View>
                <Text style={styles.currentValue}>{currentDigit} => {digit}</Text>
            </View>
            <Modal 
              animationType="slide"
              visible={modalVisible}
            >     
                <DigitModal onPress={onPress} currentValue={digit} changeValue={setDigit} />
            </Modal>
            <View  style={styles.button}>
                <TouchableHighlight 
                  onPress={() => setModalVisible(true)}
                 >
                    <Text>変更する</Text>
                </TouchableHighlight>
            </View>
        </View>
    )

}

export default DigitSetting

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row'
    },
    item: {
        margin: wp('5%'),
        fontSize: wp('5%')
    },
    currentValue: {
        margin: wp('5%'),
        fontSize: wp('5%')
    },
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        width: wp('20%'),
        height: hp('3%'),
        margin: wp('5%'),
        marginLeft: 'auto' ,
        backgroundColor: '#FF4FC3'
    }

})