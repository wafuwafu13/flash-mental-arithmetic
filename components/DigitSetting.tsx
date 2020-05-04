import React, { useState } from 'react';
import { StyleSheet, View, Text, Modal } from 'react-native';
import { Icon } from 'react-native-elements';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

import DigitModal from '../components/DigitModal';

import EditButton from '../elements/EditButton';

import { updateDigit } from '../database/UpdateDigit';

type Props = {
    currentDigit: any
}

const DigitSetting = (props: Props) => {
    
    const [modalVisible, setModalVisible] = useState(false)
    const [digit, setDigit] = useState<any>(null)

    const { currentDigit } = props

    const onPressDecision = () => {
        setModalVisible(!modalVisible)
        updateDigit(digit)
    }

    const onPressBack = () => {
        setModalVisible(!modalVisible)
    }

    return(
        <View style={styles.container}>
            <View>
                <Text style={styles.item}>
                    桁数
                </Text>
            </View> 
            <View style={styles.valueContainer}>
                <Text style={styles.value}>
                    {currentDigit}
                </Text>
                <Icon
                  name="arrow-forward"
                  style={styles.icon}
                />
                <Text style={styles.value}>
                    { digit ? (
                        <Text>
                            {digit}
                        </Text>
                    ):(
                        <Text style={styles.notEntered}>
                            未入力
                        </Text>
                    )}
                </Text>
            </View>
            <Modal 
              animationType="slide"
              visible={modalVisible}
            >     
                <DigitModal onPressDecision={onPressDecision} onPressBack={onPressBack} changeValue={setDigit} />
            </Modal>
            <View style={styles.editButton}>
                <EditButton onPress={() => setModalVisible(true)} />
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
        marginTop: wp('5%'),
        marginLeft: wp('3%'),
        fontSize: wp('5%')
    },
    valueContainer: {
        flexDirection: 'row',
        marginLeft: wp('3%'),
    },
    icon: {
        margin: wp('5%'),
    },
    value: {
        margin: wp('5%'),
        fontSize: wp('5%')
    },
    notEntered: {
        color: '#D6D1D1'
    },
    editButton: {
       marginLeft: 'auto',
    }
})