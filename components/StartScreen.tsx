import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Audio } from 'expo-av';
import firebase from 'firebase';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

import AnswerScreen from './AnswerScreen';

const StartScreen = ({ navigation }: any) => {

    const [count, setCount] = useState<any>(null);
    const [correctAnswer, setCorrectAnser] = useState<any>()
    const [answer, setAnswer] = useState<any>()
    const [end, setEnd] = useState<boolean>(false);
    let settingList: number[] = [];

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
      
    async function play(interval: number) {
        let correctAnswer:number = 0
        await sleep(2000)
        for (var i = 0; i < 5; i++) {
            let oneDigitRandomNumber = Math.floor(Math.random() * 9) + 1
            setCount(oneDigitRandomNumber)
            playSound()
            correctAnswer += oneDigitRandomNumber
            await sleep(interval);
        }
        setCorrectAnser(correctAnswer)
        setEnd(true)
    }

    async function getSetting(){
        const db = firebase.firestore()
        const auth: any= firebase.auth()
        let docRef = db.collection(auth.currentUser.uid).doc('interval')
        await docRef.get().then((doc: any) => {
            let interval = doc.data().value
            settingList.push(interval)
        })
        .catch((error) => {
            console.log(error)
        })
        return settingList
    }
    
    useEffect(() => {
        getSetting().then((value) => {
            let interval: number = value[0]
            console.log(interval + 'インターバル')
            play(interval)
        })
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