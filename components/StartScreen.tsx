import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Audio } from 'expo-av';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

const StartScreen = () => {

    const [count, setCount] = useState<any>(null);

    async function playSound(){
        try {
            let soundObject = new Audio.Sound();
            await soundObject.loadAsync(require('../assets/sounds/electronic-sound.mp3'))
            await soundObject.playAsync();   
        }
        catch (error) {
            console.log(error)
        }
    }

    function sleep(milliseconds: number) {
        return new Promise((resolve) => setTimeout(resolve, milliseconds));
    }
      
    async function main() {
        for (var i = 0; i < 10; i++) {
            let oneDigitRandomNumber = Math.floor(Math.random() * 9) + 1
            console.log(oneDigitRandomNumber)
            setCount(oneDigitRandomNumber)
            playSound()
            await sleep(1000);
        }
    }
    
    useEffect(() => {
        main()
    },[])
    
    return(
        <View style={styles.container}>
            <Text style={styles.number}>{count}</Text>
        </View>
    )
}

export default StartScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    number: {
        fontSize: wp('10%')
    }
})