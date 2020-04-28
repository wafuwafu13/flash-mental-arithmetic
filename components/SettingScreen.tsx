import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import SettingTitle from '../elements/SettingTitle';
import SettingItem from '../elements/SettingItem';
import BackButton from '../elements/BackButton';

const SettingScreen = ({ navigation }: { navigation: any} ) => {

    const settingItemList = ['面数', '枚数', '桁数', '表示間隔', '符号', '数字の色', '背景色', 'ユーザー名']

    return(
        <View style={styles.container}>
            <View style={styles.title}>
                <SettingTitle />
            </View>
            <View style={styles.settingItem}>
               { settingItemList.map((item, index) => (<SettingItem key={index} item={item}/>))}
            </View>
            <View style={styles.backButton}>
                <BackButton onPress={() => navigation.navigate('Home')} />
            </View>
        </View>
    )
}

export default SettingScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFBFB'
    },
    title: {
        flex: 1,
        top: wp('13%'),
        alignItems: 'center'
    },
    settingItem: {
        bottom: hp('7%'),
        marginLeft: wp('5%')
    },
    backButton: {
        bottom: hp('3%')
    }
})