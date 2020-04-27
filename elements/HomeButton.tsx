import React from 'react';
import { StyleSheet, View, Text, TouchableHighlight } from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

type Props = {
    type: string
    onPress: any
    children?: React.ReactNode
}

const Button = (props: Props) => {

    const { type, onPress } = props

    const blue = '#62D0E9'
    const red = '#FF4FC3'
    
    let bgColor = (type === 'start') ? blue : red

    return(
        <View style={styles.container}>
            <TouchableHighlight 
              style={[styles.button, {backgroundColor: bgColor}]}
              onPress={onPress}>
                <Text style={styles.buttonText}>
                    { props.children }
                </Text>
            </TouchableHighlight>
        </View>
    )
}

export default Button;

const styles = StyleSheet.create({
    container: {
        alignItems: 'center'
    },
    button: {
        margin: hp('5%'),
        width: wp('65%'),
        height: hp('5%'),
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonText: {
        fontSize: wp('6%')
    }
})