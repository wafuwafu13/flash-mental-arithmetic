import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

type Props = {
    key: number
    item: string
}

const SettingItem = (props: Props) => {

    const { item } = props

    return(
        <View>
           <Text style={styles.item}>{ item }</Text>
        </View>
    )
}

export default SettingItem

const styles = StyleSheet.create({
    item: {
        margin: wp('7%'),
        fontSize: wp('5%')
    }
})