import React, { useState } from 'react';
import { StyleSheet, View, Text, Modal } from 'react-native';
import { Icon } from 'react-native-elements';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp
} from 'react-native-responsive-screen';

import SheetModal from '../Modal/SheetModal';

import EditButton from '../../elements/EditButton';

import { updateSheet } from '../../database/Update/UpdateSheet';

type Props = {
    currentSheet: number | undefined;
};

const SheetSetting: React.FC<Props> = (props) => {
    const [modalVisible, setModalVisible] = useState<boolean>(false);
    const [sheet, setSheet] = useState<number | undefined>();

    const { currentSheet } = props;

    const onPressDecision = () => {
        setModalVisible(!modalVisible);
        updateSheet(sheet!);
    };

    const onPressBack = () => {
        setSheet(undefined);
        setModalVisible(!modalVisible);
    };

    return (
        <View style={styles.container}>
            <View>
                <Text style={styles.item}>枚数</Text>
            </View>
            <View style={styles.valueContainer}>
                <Text style={styles.value}>{currentSheet}</Text>
                <Icon name="arrow-forward" style={styles.icon} size={wp('7%')} />
                <Text style={styles.value}>
                    {sheet ? <Text>{sheet}</Text> : <Text style={styles.notEntered}>未入力</Text>}
                </Text>
            </View>
            <Modal animationType="slide" visible={modalVisible}>
                <SheetModal
                    onPressDecision={onPressDecision}
                    onPressBack={onPressBack}
                    changeValue={setSheet}
                />
            </Modal>
            <View style={styles.editButton}>
                <EditButton onPress={() => setModalVisible(true)} />
            </View>
        </View>
    );
};

export default SheetSetting;

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
