import React, { useState } from 'react';
import { StyleSheet, View, Text, Modal, TouchableHighlight } from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import SurfaceModal from '../components/SurfaceModal';
import SheetModal from '../components/SheetModal';
import DigitModal from '../components/DigitModal';
import IntervalModal from '../components/IntervalModal';
import SignModal from '../components/SignModal';
import NumberColorModal from '../components/NumberColorModal';
import BackgroundColorModal from '../components/BackgroundColorModal';

type Props = {
    key: number
    item: string
}

const SettingItem = (props: Props) => {

    const { item } = props
    const settingModal: any = {
        '面数': <SurfaceModal onPress={() => setModalVisible(!modalVisible)} />,
        '枚数': <SheetModal onPress={() => setModalVisible(!modalVisible)} />,
        '桁数': <DigitModal onPress={() => setModalVisible(!modalVisible)} />,
        '表示間隔': <IntervalModal onPress={() => setModalVisible(!modalVisible)} />,
        '符号': <SignModal onPress={() => setModalVisible(!modalVisible)} />,
        '数字の色': <NumberColorModal onPress={() => setModalVisible(!modalVisible)} />,
        '背景色': <BackgroundColorModal onPress={() => setModalVisible(!modalVisible)} />
    }
    const [modalVisible, setModalVisible] = useState(false)

    return(
        <View style={styles.container}>
            <View>
                <Text style={styles.item}>{ item }</Text>
            </View> 
            <Modal 
              animationType="slide"
              visible={modalVisible}
            >
                { settingModal[item] }
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

export default SettingItem

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row'
    },
    item: {
        margin: wp('7%'),
        fontSize: wp('5%')
    },
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        width: wp('20%'),
        height: hp('3%'),
        margin: wp('7%'),
        marginLeft: 'auto' ,
        backgroundColor: '#FF4FC3'
    }
})