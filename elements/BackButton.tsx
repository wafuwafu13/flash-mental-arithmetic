import React from 'react';
import { StyleSheet, View, Text, TouchableHighlight } from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

type Props = {
    onPress: any
}

const BackButton = (props: Props) => {

    const { onPress } = props 
    
    return(
        <View style={styles.container}>
            <TouchableHighlight 
              style={styles.button}
              onPress={onPress}>
                <Text style={styles.text}>戻る</Text>
            </TouchableHighlight>
        </View>
    )
}

export default BackButton;

const styles = StyleSheet.create({
    container: {
        alignItems: 'center'
    },
    button: {
        width: wp('65%'),
        height: hp('5%'),
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#7244F4'
    },
    text: {
        color: '#fff'
    }

})