import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Audio } from 'expo-av';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import AnswerScreen from './AnswerScreen';

const StartScreen = ({ navigation }: any) => {

    const [count, setCount] = useState<any>(null);
    const [correctAnswer, setCorrectAnser] = useState<any>()
    const [answer, setAnswer] = useState<any>()
    const [end, setEnd] = useState<boolean>(false);

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
      
    async function play() {
        let correctAnswer:number = 0
        await sleep(2000)
        for (var i = 0; i < 5; i++) {
            let oneDigitRandomNumber = Math.floor(Math.random() * 9) + 1
            setCount(oneDigitRandomNumber)
            playSound()
            correctAnswer += oneDigitRandomNumber
            console.log(correctAnswer)
            await sleep(1000);
        }
        setCorrectAnser(correctAnswer)
        setEnd(true)
    }
    
    useEffect(() => {
        play()
    },[])
    
    return(
        <View style={styles.container}>
            { !end && (
                <View>
                  <Text style={styles.number}>{count}</Text>
                  <Text>{correctAnswer}</Text>
                </View>
              )
            }
            { end && (
                <AnswerScreen onPress={() => navigation.navigate('Result', { answer: answer, correctAnswer: correctAnswer })} setAnswer={setAnswer}/>
              )
            }
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