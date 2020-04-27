import React, { useState } from 'react';
import { StyleSheet, View, Text, Modal, TouchableHighlight, TextInput } from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

type Props = {
    key: number
    item: string
}

const SettingItem = (props: Props) => {

    const { item } = props
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
                <View style={styles.modal}>
                    <Text style={styles.text}>面の数を入力してください。</Text>
                    <TextInput
                     style={styles.input} />
                    <TouchableHighlight
                      onPress={() => setModalVisible(!modalVisible)}
                    >
                          <Text>決定</Text>
                    </TouchableHighlight>
                </View>
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