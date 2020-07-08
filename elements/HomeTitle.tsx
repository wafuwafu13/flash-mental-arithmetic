import React from 'react';
import { StyleSheet, Text } from 'react-native';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp
} from 'react-native-responsive-screen';

const HomeTitle: React.FC = () => {
    return <Text style={styles.title}>多面！フラッシュ暗算</Text>;
};

export default HomeTitle;

const styles = StyleSheet.create({
    title: {
        color: '#fff',
        fontSize: wp('7%')
    }
});
