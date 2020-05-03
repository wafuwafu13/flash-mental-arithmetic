import React, { useState } from 'react';
import { StyleSheet, View, Text, Modal, TouchableHighlight } from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

import SurfaceModal from '../components/SurfaceModal';

import { updateSurface } from '../database/UpdateSurface';

type Props = {
    currentSurface: any
}

const SurfaceSetting = (props: Props) => {
    
    const [modalVisible, setModalVisible] = useState(false)
    const [surface, setSurface] = useState<any>(null)

    const { currentSurface } = props

    const onPressDecision = () => {
        setModalVisible(!modalVisible)
        updateSurface(surface)
    }

    return(
        <View style={styles.container}>
            <View>
                <Text style={styles.item}>面数</Text>
            </View> 
            <View>
                <Text style={styles.currentValue}>{currentSurface} => {surface}</Text>
            </View>
            <Modal 
              animationType="slide"
              visible={modalVisible}
            >     
                <SurfaceModal onPress={onPressDecision} changeValue={setSurface} />
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

export default SurfaceSetting

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