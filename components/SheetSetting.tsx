import React, { useState } from 'react';
import { StyleSheet, View, Text, Modal, TouchableHighlight } from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

import SheetModal from '../components/SheetModal';

import { updateSheet } from '../database/UpdateSheet';

type Props = {
    currentSheet: any
}

const SheetSetting = (props: Props) => {

    const [modalVisible, setModalVisible] = useState(false)
    const [sheet, setSheet] = useState<any>(null)

    const { currentSheet } = props

    const onPressDecision = () => {
        setModalVisible(!modalVisible)
        updateSheet(sheet)
    }

    const onPressBack = () => {
        setModalVisible(!modalVisible)
    }

    return(
        <View style={styles.container}>
            <View>
                <Text style={styles.item}>枚数</Text>
            </View> 
            <View>
                <Text style={styles.currentValue}>{currentSheet} => {sheet}</Text>
            </View>
            <Modal 
              animationType="slide"
              visible={modalVisible}
            >     
                <SheetModal onPressDecision={onPressDecision} onPressBack={onPressBack} changeValue={setSheet} />
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

export default SheetSetting

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