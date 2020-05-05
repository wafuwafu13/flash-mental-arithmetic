import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Audio } from 'expo-av';
import firebase from 'firebase';
import { Divider } from 'react-native-elements';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

import AnswerScreen from './AnswerScreen';
import TwoAnswerScreen from './TwoAnswerScreen';
import ThreeAnswerScreen from './ThreeAnswerScreen';
import FourAnswerScreen from './FourAnswerScreen';

const StartScreen = ({ navigation }: any) => {

    const [surface, setSurface] = useState<any>(null)

    const [number, setNumber] = useState<any>(null);
    const [number2, setNumber2] = useState<any>(null);
    const [number3, setNumber3] = useState<any>(null);
    const [number4, setNumber4] = useState<any>(null);

    const [correctAnswer, setCorrectAnswer] = useState<any>()
    const [correctAnswer2, setCorrectAnswer2] = useState<any>()
    const [correctAnswer3, setCorrectAnswer3] = useState<any>()
    const [correctAnswer4, setCorrectAnswer4] = useState<any>()

    const [answer, setAnswer] = useState<any>()
    const [answer2, setAnswer2] = useState<any>()
    const [answer3, setAnswer3] = useState<any>()
    const [answer4, setAnswer4] = useState<any>()

    const [isend, setIsEnd] = useState<boolean>(false);

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

    async function playStart(sheet: number, digit: number, interval: number) {
        let correctAnswer: number = 0
        let correctAnswer2: number = 0
        let correctAnswer3: number = 0
        let correctAnswer4: number = 0

        await sleep(2000)

        if (digit == 1) {
            for (var i = 0; i < sheet; i++) {
                let oneDigitRandomNumber = Math.floor(Math.random() * 9) + 1
                let oneDigitRandomNumber2 = Math.floor(Math.random() * 9) + 1
                let oneDigitRandomNumber3 = Math.floor(Math.random() * 9) + 1
                let oneDigitRandomNumber4 = Math.floor(Math.random() * 9) + 1
                setNumber(oneDigitRandomNumber)
                setNumber2(oneDigitRandomNumber2)
                setNumber3(oneDigitRandomNumber3)
                setNumber4(oneDigitRandomNumber4)
                playSound()
                correctAnswer += oneDigitRandomNumber
                correctAnswer2 += oneDigitRandomNumber2
                correctAnswer3 += oneDigitRandomNumber3
                correctAnswer4 += oneDigitRandomNumber4
                await sleep(interval);
            }
        } else if (digit == 2) {
            for (var i = 0; i < sheet; i++) {
                let min = 10
                let max = 99
                let twoDigitRandomNumber = Math.floor( Math.random() * (max + 1 - min) ) + min
                let twoDigitRandomNumber2 = Math.floor( Math.random() * (max + 1 - min) ) + min
                let twoDigitRandomNumber3 = Math.floor( Math.random() * (max + 1 - min) ) + min
                let twoDigitRandomNumber4 = Math.floor( Math.random() * (max + 1 - min) ) + min
                setNumber(twoDigitRandomNumber)
                setNumber2(twoDigitRandomNumber2)
                setNumber3(twoDigitRandomNumber3)
                setNumber4(twoDigitRandomNumber4)
                playSound()
                correctAnswer += twoDigitRandomNumber
                correctAnswer2 += twoDigitRandomNumber2
                correctAnswer3 += twoDigitRandomNumber3
                correctAnswer4 += twoDigitRandomNumber4
                await sleep(interval);
            }
        } else if (digit == 3) {
            for (var i = 0; i < sheet; i++) {
                let min = 100
                let max = 999
                let threeDigitRandomNumber = Math.floor( Math.random() * (max + 1 - min) ) + min
                let threeDigitRandomNumber2 =  Math.floor( Math.random() * (max + 1 - min) ) + min
                let threeDigitRandomNumber3 = Math.floor( Math.random() * (max + 1 - min) ) + min
                let threeDigitRandomNumber4 = Math.floor( Math.random() * (max + 1 - min) ) + min
                setNumber(threeDigitRandomNumber)
                setNumber2(threeDigitRandomNumber2)
                setNumber3(threeDigitRandomNumber3)
                setNumber4(threeDigitRandomNumber4)
                playSound()
                correctAnswer += threeDigitRandomNumber
                correctAnswer2 += threeDigitRandomNumber2
                correctAnswer3 += threeDigitRandomNumber3
                correctAnswer4 += threeDigitRandomNumber4
                await sleep(interval);
            }
        } else if (digit == 4) {
            for (var i = 0; i < sheet; i++) {
                let min = 1000
                let max = 9999
                let fourDigitRandomNumber = Math.floor( Math.random() * (max + 1 - min) ) + min
                let fourDigitRandomNumber2 =  Math.floor( Math.random() * (max + 1 - min) ) + min
                let fourDigitRandomNumber3 = Math.floor( Math.random() * (max + 1 - min) ) + min
                let fourDigitRandomNumber4 =  Math.floor( Math.random() * (max + 1 - min) ) + min
                setNumber(fourDigitRandomNumber)
                setNumber2(fourDigitRandomNumber2)
                setNumber3(fourDigitRandomNumber3)
                setNumber4(fourDigitRandomNumber4)
                playSound()
                correctAnswer += fourDigitRandomNumber
                correctAnswer2 += fourDigitRandomNumber2
                correctAnswer3 + fourDigitRandomNumber3
                correctAnswer4 + fourDigitRandomNumber4
                await sleep(interval);
            }
        } else {
            console.log('error...')
        }

        setCorrectAnswer(correctAnswer)
        setCorrectAnswer2(correctAnswer2)
        setCorrectAnswer3(correctAnswer3)
        setCorrectAnswer4(correctAnswer4)
        console.log(correctAnswer +  '正解1')
        console.log(correctAnswer2 + '正解2')
        console.log(correctAnswer3 +  '正解3')
        console.log(correctAnswer4 + '正解4')
        setIsEnd(true)
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

            let sheet: number = settingList[2]
            let digit: number = settingList[0]
            let interval: number = settingList[1]
            console.log(sheet + '枚')
            console.log(interval + 'インターバル')
            playStart(sheet, digit, interval)
        })
    },[])
    
    return(
        <View style={styles.container}>
            { !isend && ( 
                <View>
                    { surface == 1 && (
                        <Text style={styles.number}>{number}</Text>
                    )}
                    { surface == 2 && (
                        <View>
                            <Text style={styles.number}>{number}</Text>
                            <Divider style={{ backgroundColor: '#fff' }} />
                            <Text style={styles.number}>{number2}</Text>
                        </View>
                    )}
                    { surface == 3 && (
                        <View>
                            <Text style={styles.number}>{number}</Text>
                            <Divider style={{ backgroundColor: '#fff' }} />
                            <Text style={styles.number}>{number2}</Text>
                            <Divider style={{ backgroundColor: '#fff' }} />
                            <Text style={styles.number}>{number3}</Text>
                        </View>
                    )}
                    { surface == 4 && (
                        <View>
                            <Text style={styles.number}>{number}</Text>
                            <Divider style={{ backgroundColor: '#fff' }} />
                            <Text style={styles.number}>{number2}</Text>
                            <Divider style={{ backgroundColor: '#fff' }} />
                            <Text style={styles.number}>{number3}</Text>
                            <Divider style={{ backgroundColor: '#fff' }} />
                            <Text style={styles.number}>{number4}</Text>
                        </View>
                    )}
                </View>
            )}
            { isend && (
                <View>
                { surface == 1 && (
                    <AnswerScreen 
                      onPress={() => navigation.navigate('Result', 
                        { answer: answer, 
                          correctAnswer: correctAnswer 
                        })} 
                      setAnswer={setAnswer} 
                    />
                )}
                { surface == 2 && (
                    <TwoAnswerScreen 
                      onPress={() => navigation.navigate('TwoResult', 
                        { answer: answer, 
                          correctAnswer: correctAnswer, 
                          answer2: answer2, 
                          correctAnswer2: correctAnswer2 
                        }
                      )} 
                      setAnswer={setAnswer}
                      setAnswer2={setAnswer2}
                    />
                )}
                { surface == 3 && (
                    <ThreeAnswerScreen 
                      onPress={() => navigation.navigate('ThreeResult',
                        { answer: answer, 
                          correctAnswer: correctAnswer, 
                          answer2: answer2, 
                          correctAnswer2: correctAnswer2,
                          answer3: answer3,
                          correctAnswer3: correctAnswer3,
                        }
                      )} 
                      setAnswer={setAnswer}
                      setAnswer2={setAnswer2}
                      setAnswer3={setAnswer3}
                    />
                )}
                { surface == 4 && (
                    <FourAnswerScreen 
                      onPress={() => navigation.navigate('FourResult',
                        { answer: answer, 
                          correctAnswer: correctAnswer, 
                          answer2: answer2, 
                          correctAnswer2: correctAnswer2,
                          answer3: answer3,
                          correctAnswer3: correctAnswer3,
                          answer4: answer4,
                          correctAnswer4: correctAnswer4,
                        }
                      )} 
                      setAnswer={setAnswer}
                      setAnswer2={setAnswer2}
                      setAnswer3={setAnswer3}
                      setAnswer4={setAnswer4}
                    />
                )}
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
        justifyContent: 'center',
        backgroundColor: '#1B1A1A'
    },
    number: {
        fontSize: wp('13%'),
        margin: wp('5%'),
        color: '#fff'
    }
})