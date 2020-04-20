import React from 'react';
import { StyleSheet, Text, TouchableHighlight } from 'react-native';

type Props = {
    type: string
    children?: React.ReactNode
}

const Button = (props: Props) => {

    const { type } = props
    const blue = '#62D0E9'
    const red = '#FF4FC3'

    let bgColor = (type === 'start') ? blue : red

    return(
        <TouchableHighlight style={[styles.button, {backgroundColor: bgColor}]}>
            <Text>{ props.children }</Text>
        </TouchableHighlight>
    )
}

export default Button;

const styles = StyleSheet.create({
    button: {
       margin: 30,
       top: 300,
       height: 30,
       justifyContent: 'center',
       alignItems: 'center'
    }
})