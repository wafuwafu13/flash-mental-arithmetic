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

import { randomNumber } from '../../elements/RandomNumber';

import { RootStackParamList } from '../../App';
import { StackNavigationProp } from '@react-navigation/stack';

type StartScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'Start'
>;

type Props = {
    navigation: StartScreenNavigationProp;
}

const StartScreen: React.FC<Props> = ({ navigation }) => {

    const [surface, setSurface] = useState<number | undefined>()
    const [sheet, setSheet] = useState<number | undefined>()
    const [digit, setDigit] = useState<number | undefined>()
    const [interval, setInterval] = useState<number | undefined>()

    const [number, setNumber] = useState<number | undefined>();
    const [number2, setNumber2] = useState<number | undefined>();
    const [number3, setNumber3] = useState<number | undefined>();
    const [number4, setNumber4] = useState<number | undefined>();

    const [correctAnswer, setCorrectAnswer] = useState<number | undefined>()
    const [correctAnswer2, setCorrectAnswer2] = useState<number | undefined>()
    const [correctAnswer3, setCorrectAnswer3] = useState<number | undefined>()
    const [correctAnswer4, setCorrectAnswer4] = useState<number | undefined>()

    const [answer, setAnswer] = useState<number | undefined>()
    const [answer2, setAnswer2] = useState<number | undefined>()
    const [answer3, setAnswer3] = useState<number | undefined>()
    const [answer4, setAnswer4] = useState<number | undefined>()

    const [isend, setIsEnd] = useState<boolean>(false);

    let settingList: number[] = [];

    async function playSound(){
        try {
            let soundObject = new Audio.Sound();
            await soundObject.loadAsync(require('../../assets/sounds/electronic-sound.mp3'))
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
                let min: number = 1
                let max: number = 9
                let oneDigitRandomNumber = randomNumber(min, max)
                let oneDigitRandomNumber2 = randomNumber(min, max)
                let oneDigitRandomNumber3 = randomNumber(min, max)
                let oneDigitRandomNumber4 = randomNumber(min, max)
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
                let twoDigitRandomNumber = randomNumber(min, max)
                let twoDigitRandomNumber2 = randomNumber(min, max)
                let twoDigitRandomNumber3 = randomNumber(min, max)
                let twoDigitRandomNumber4 = randomNumber(min, max)
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
                let min: number = 100
                let max: number = 999
                let threeDigitRandomNumber = randomNumber(min, max)
                let threeDigitRandomNumber2 =  randomNumber(min, max)
                let threeDigitRandomNumber3 = randomNumber(min, max)
                let threeDigitRandomNumber4 = randomNumber(min, max)
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
                let min: number = 1000
                let max: number = 9999
                let fourDigitRandomNumber = randomNumber(min, max)
                let fourDigitRandomNumber2 =  randomNumber(min, max)
                let fourDigitRandomNumber3 = randomNumber(min, max)
                let fourDigitRandomNumber4 =  randomNumber(min, max)
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
                console.log(doc.data())
                settingList.push(doc.data().value) // [digit, interval, record, sheet, surface]
            })
        })
        .catch((error) => {
            console.log(error)
        })
        return settingList
    }
    
    useEffect(() => {
        getSetting().then((settingList) => {

            let surface: number = settingList[4]
            setSurface(surface)

            let sheet: number = settingList[3]
            setSheet(sheet)

            let digit: number = settingList[0]
            setDigit(digit)

            let interval: number = settingList[1]
            setInterval(interval)

            console.log(surface + '面')
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
                        { answer: answer!, 
                          correctAnswer: correctAnswer!,
                          surface: surface,
                          sheet: sheet!,
                          digit: digit!,
                          interval: interval!
                        })} 
                      setAnswer={setAnswer}
                    />
                )}
                { surface == 2 && (
                    <TwoAnswerScreen 
                      onPress={() => navigation.navigate('TwoResult', 
                        { answer: answer!, 
                          correctAnswer: correctAnswer!, 
                          answer2: answer2!, 
                          correctAnswer2: correctAnswer2!,
                          surface: surface,
                          sheet: sheet!,
                          digit: digit!,
                          interval: interval!
                        }
                      )} 
                      setAnswer={setAnswer}
                      setAnswer2={setAnswer2}
                    />
                )}
                { surface == 3 && (
                    <ThreeAnswerScreen 
                      onPress={() => navigation.navigate('ThreeResult',
                        { answer: answer!, 
                          correctAnswer: correctAnswer!, 
                          answer2: answer2!, 
                          correctAnswer2: correctAnswer2!,
                          answer3: answer3!,
                          correctAnswer3: correctAnswer3!,
                          surface: surface,
                          sheet: sheet!,
                          digit: digit!,
                          interval: interval!
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
                        { answer: answer!, 
                          correctAnswer: correctAnswer!, 
                          answer2: answer2!, 
                          correctAnswer2: correctAnswer2!,
                          answer3: answer3!,
                          correctAnswer3: correctAnswer3!,
                          answer4: answer4!,
                          correctAnswer4: correctAnswer4!,
                          surface: surface,
                          sheet: sheet!,
                          digit: digit!,
                          interval: interval!
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
        fontSize: wp('18%'),
        margin: wp('5%'),
        color: '#fff'
    }
})