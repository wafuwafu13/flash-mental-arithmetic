import React from 'react';
import { StyleSheet, View, Text, TouchableHighlight } from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

type Props = {
    type: string
    onPress: any
    children?: React.ReactNode
}

const HomeButton = (props: Props) => {

    const { type, onPress } = props

    const blue = '#05BEE7'
    const red = '#FF4FC3'
    const purple = '#7244F4'
    const darkBlue = '#04728A'
    const darkRed = '#B73C8D'
    const darkPurple = "#492B9D"
    
    const bgColor: any = {
        'start': blue,
        'setting': red,
        'record': purple
    }
    const overBgColor: any = {
        'start': darkBlue,
        'setting': darkRed,
        'record': darkPurple
    }

    return(
        <View style={styles.container}>
            <TouchableHighlight 
              style={[styles.button, {backgroundColor: bgColor[type]}]}
              onPress={onPress}
              underlayColor={overBgColor[type]}
              activeOpacity={0.7}
            >
                <Text style={styles.buttonText}>
                    { props.children }
                </Text>
            </TouchableHighlight>
        </View>
    )
}

export default HomeButton;

const styles = StyleSheet.create({
    container: {
        alignItems: 'center'
    },
    button: {
        margin: hp('5%'),
        width: wp('65%'),
        height: hp('5%'),
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 4
    },
    buttonText: {
        color: '#FEFFF3',
        fontWeight: '500',
        fontSize: wp('6%')
    }
})