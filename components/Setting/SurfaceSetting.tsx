import React, { useState } from 'react';
import { StyleSheet, View, Text, Modal } from 'react-native';
import { Icon } from 'react-native-elements';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp
} from 'react-native-responsive-screen';

import SurfaceModal from '../Modal/SurfaceModal';

import EditButton from '../../elements/EditButton';

import { updateSurface } from '../../database/Update/UpdateSurface';

type Props = {
    currentSurface: number | undefined;
};

const SurfaceSetting: React.FC<Props> = (props) => {
    const [modalVisible, setModalVisible] = useState<boolean>(false);
    const [surface, setSurface] = useState<number | undefined>();

    const { currentSurface } = props;

    const onPressDecision = () => {
        setModalVisible(!modalVisible);
        updateSurface(surface!);
    };

    const onPressBack = () => {
        setSurface(undefined);
        setModalVisible(!modalVisible);
    };

    return (
        <View style={styles.container}>
            <View>
                <Text style={styles.item}>面数</Text>
            </View>
            <View style={styles.valueContainer}>
                <Text style={styles.value}>{currentSurface}</Text>
                <Icon name="arrow-forward" size={wp('7%')} style={styles.icon} />
                <Text style={styles.value}>
                    {surface ? (
                        <Text>{surface}</Text>
                    ) : (
                        <Text style={styles.notEntered}>未入力</Text>
                    )}
                </Text>
            </View>
            <Modal animationType="slide" visible={modalVisible}>
                <SurfaceModal
                    onPressDecision={onPressDecision}
                    onPressBack={onPressBack}
                    changeValue={setSurface}
                />
            </Modal>
            <View style={styles.editButton}>
                <EditButton onPress={() => setModalVisible(true)} />
            </View>
        </View>
    );
};

export default SurfaceSetting;

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
        marginLeft: wp('3%')
    },
    icon: {
        margin: wp('5%')
    },
    value: {
        margin: wp('5%'),
        fontSize: wp('5%')
    },
    notEntered: {
        color: '#D6D1D1'
    },
    editButton: {
        marginLeft: 'auto'
    }
});
