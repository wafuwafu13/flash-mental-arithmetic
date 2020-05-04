import React from 'react';
import { StyleSheet, View, TouchableHighlight } from 'react-native';
import { Icon } from 'react-native-elements';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

type Props = {
    onPress: any
}

const EditButton = (props: Props) => {

    const { onPress } = props

    return(
        <View style={{ flexDirection: 'row', justifyContent: 'flex-end' }}>
        <TouchableHighlight 
            style={styles.editButton}
            onPress={onPress}
            underlayColor={'#D6D1D1'}
            activeOpacity={0.7}
        >
            
            <Icon
              name="edit"
              color="#fff"
              size={wp('6%')}
            />
        </TouchableHighlight>
        </View>
    )
}

export default EditButton

const styles = StyleSheet.create({
    editButton: {
        justifyContent: 'center',
        top: wp('3%'),
        width: wp('10%'),
        height: wp('10%'),
        borderRadius: 50,
        backgroundColor: '#7244F4'
    }
})