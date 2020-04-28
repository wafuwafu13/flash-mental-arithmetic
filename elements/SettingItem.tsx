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
import UserNameModal from '../components/UserNameModal';

type Props = {
    key: number
    item: string
}

const SettingItem = (props: Props) => {

    const { item } = props
    const [modalVisible, setModalVisible] = useState(false)
    const [surface, setSurface] = useState<number>(1)
    const [sheet, setSheet] = useState<number>(10)
    const [digit, setDigit] = useState<number>(1)
    const [interval, setInterval] = useState<number>(1)
    const [userName, setUserName] = useState<string>()
    const onPress = () => {
        setModalVisible(!modalVisible)
    }
    const settingModal: any = {
        '面数': <SurfaceModal onPress={onPress} currentValue={surface} changeValue={setSurface} />,
        '枚数': <SheetModal onPress={onPress} currentValue={sheet} changeValue={setSheet} />,
        '桁数': <DigitModal onPress={onPress} currentValue={digit} changeValue={setDigit} />,
        '表示間隔': <IntervalModal onPress={onPress} currentValue={interval} changeValue={setInterval} />,
        '符号': <SignModal onPress={onPress} />,
        '数字の色': <NumberColorModal onPress={onPress} />,
        '背景色': <BackgroundColorModal onPress={onPress} />,
        'ユーザー名': <UserNameModal onPress={onPress} currentValue={userName} changeValue={setUserName}/>
    }
    const currentValue: any = {
        '面数': surface,
        '枚数': sheet,
        '桁数': digit,
        '表示間隔': interval,
        'ユーザー名': userName
    }

    return(
        <View style={styles.container}>
            <View>
                <Text style={styles.item}>{ item }</Text>
            </View> 
            <View>
                <Text style={styles.currentValue}>{ currentValue[item] }</Text>
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