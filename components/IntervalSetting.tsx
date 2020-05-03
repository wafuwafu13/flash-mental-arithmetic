import React, { useState } from 'react';
import { StyleSheet, View, Text, Modal, TouchableHighlight } from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

import IntervalModal from '../components/IntervalModal';

import { updateInterval } from '../database/UpdateInterval';

type Props = {
    currentInterval: any
}

const IntervalSetting = (props: Props) => {

    const [modalVisible, setModalVisible] = useState(false)
    const [interval, setInterval] = useState<any>(null)

    const { currentInterval } = props

    const onPress = () => {
        setModalVisible(!modalVisible)
        updateInterval(interval)
    }

    return(
        <View style={styles.container}>
            <View>
                <Text style={styles.item}>表示間隔</Text>
            </View> 
            <View>
                <Text style={styles.currentValue}>{currentInterval} => {interval}</Text>
            </View>
            <Modal 
              animationType="slide"
              visible={modalVisible}
            >     
                <IntervalModal onPress={onPress} currentValue={interval} changeValue={setInterval} />
            </Modal>
            <View style={styles.button}>
                <TouchableHighlight 
                  onPress={() => setModalVisible(true)}
                 >
                    <Text>変更する</Text>
                </TouchableHighlight>
            </View>
        </View>
    )

}

export default IntervalSetting

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