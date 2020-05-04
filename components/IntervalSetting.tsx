import React, { useState } from 'react';
import { StyleSheet, View, Text, Modal } from 'react-native';
import { Icon } from 'react-native-elements';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

import IntervalModal from '../components/IntervalModal';

import EditButton from '../elements/EditButton';

import { updateInterval } from '../database/UpdateInterval';

type Props = {
    currentInterval: any
}

const IntervalSetting = (props: Props) => {

    const [modalVisible, setModalVisible] = useState(false)
    const [interval, setInterval] = useState<any>(null)

    const { currentInterval } = props

    const onPressDecision = () => {
        setModalVisible(!modalVisible)
        updateInterval(interval)
    }

    const onPressBack = () => {
        setModalVisible(!modalVisible)
    }

    return(
        <View style={styles.container}>
            <View>
                <Text style={styles.item}>
                    表示間隔
                </Text>
            </View> 
            <View style={styles.valueContainer}>
                <Text style={styles.value}>
                    {currentInterval}
                </Text>
                <Icon
                  name="arrow-forward"
                  style={styles.icon}
                  size={wp('7%')}
                />
                <Text style={styles.value}>
                    { interval ? (
                        <Text>
                            {interval}
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
                <IntervalModal onPressDecision={onPressDecision} onPressBack={onPressBack}  changeValue={setInterval} />
            </Modal>
            <View style={styles.editButton}>
                <EditButton onPress={() => setModalVisible(true)} />
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
        marginTop: wp('5%'),
        marginLeft: wp('3%'),
        fontSize: wp('5%')
    },
    valueContainer: {
        flexDirection: 'row',
        marginLeft: wp('2%'),
    },
    icon: {
        margin: wp('5%'),
        marginLeft: wp('0.2%'),
    },
    value: {
        margin: wp('5%'),
        marginLeft: wp('0.2%'),
        fontSize: wp('5%')
    },
    notEntered: {
        color: '#D6D1D1'
    },
    editButton: {
       marginLeft: 'auto',
    }
})