import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Audio } from 'expo-av';
import firebase from 'firebase';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

import AnswerScreen from './AnswerScreen';
import TwoAnswerScreen from './TwoAnswerScreen';

const StartScreen = ({ navigation }: any) => {

    const [surface, setSurface] = useState<any>(null)
    const [number, setNumber] = useState<any>(null);
    const [number2, setNumber2] = useState<any>(null);
    const [correctAnswer, setCorrectAnswer] = useState<any>()
    const [correctAnswer2, setCorrectAnswer2] = useState<any>()
    const [answer, setAnswer] = useState<any>()
    const [answer2, setAnswer2] = useState<any>()
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
        let correctAnswer: number = 0
        let correctAnswer2: number = 0
        await sleep(2000)
        for (var i = 0; i < 5; i++) {
            let oneDigitRandomNumber = Math.floor(Math.random() * 9) + 1
            let oneDigitRandomNumber2 =  Math.floor(Math.random() * 9) + 1
            setNumber(oneDigitRandomNumber)
            setNumber2(oneDigitRandomNumber2)
            playSound()
            correctAnswer += oneDigitRandomNumber
            correctAnswer2 += oneDigitRandomNumber2
            await sleep(interval);
        }
        setCorrectAnswer(correctAnswer)
        setCorrectAnswer2(correctAnswer2)
        console.log(correctAnswer +  '正解1')
        console.log(correctAnswer2 + '正解2')
        setEnd(true)
    }

    async function getSetting(){
        const db = firebase.firestore()
        const auth: any= firebase.auth()
        let docRef = db.collection(auth.currentUser.uid)
        await docRef.get().then((settings) => {
            settings.forEach((doc) => {
                settingList.push(doc.data().value)
            })
        })
        .catch((error) => {
            console.log(error)
        })
        return settingList
    }
    
    useEffect(() => {
        getSetting().then((settingList) => {
            let surface: number = settingList[3]
            setSurface(surface)
            let interval: number = settingList[1]
            console.log(interval + 'インターバル')
            play(interval)
        })
    },[])
    
    return(
        <View style={styles.container}>
            { !end && ( 
                <View>
                    { surface == 1 && (
                        <Text style={styles.number}>{number}</Text>
                    )}
                    { surface == 2 && (
                        <View>
                            <Text style={styles.number}>{number}</Text>
                            <Text style={styles.number}>{number2}</Text>
                        </View>
                    )}
                </View>
            )}
            { end && (
                <View>
                { surface == 1 && (
                    <AnswerScreen 
                      onPress={() => navigation.navigate('Result', { answer: answer, correctAnswer: correctAnswer })} 
                      setAnswer={setAnswer} 
                    />
                )}
                { surface == 2 && (
                    <TwoAnswerScreen 
                      onPress={() => navigation.navigate('TwoResult', { answer: answer, correctAnswer: correctAnswer, answer2: answer2, correctAnswer2: correctAnswer2 })} 
                      setAnswer={setAnswer}
                      setAnswer2={setAnswer2}
                    />
                )
                }
                </View>
            )}
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