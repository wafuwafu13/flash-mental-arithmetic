import React from 'react';
import { StyleSheet, Text } from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

const SettingTitle = () => {
    return(
        <Text style={styles.title}>
            設定
        </Text>
    )
}

export default SettingTitle;

const styles = StyleSheet.create({
    title: {
      color: '#7244F4',
      fontSize: wp('7%'),
    }
});
