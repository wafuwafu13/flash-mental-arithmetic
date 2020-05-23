import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import firebase from 'firebase';
import ENV from './env.json'

import HomeScreen from './components/Screen/HomeScreen';
import StartScreen from './components/Screen/StartScreen';
import SettingScreen from './components/Screen/SettingScreen';
import ResultScreen from './components/Screen/ResultScreen';
import TwoResultScreen from './components/Screen/TwoResultScreen';
import ThreeResultScreen from './components/Screen/ThreeResultScreen';
import FourResultScreen from './components/Screen/FourResultScreen';
import RecordScreen from './components/Screen/RecordScreen';

import { initializeSurface } from './database/Initialize/InitializeSurface';
import { initializeSheet } from './database/Initialize/InitializeSheet';
import { initializeDigit } from './database/Initialize/InitializeDigit';
import { initializeInterval } from './database/Initialize/InitializeInterval';
import { initializeRecord } from './database/Initialize/InitializeRecord';

require("firebase/firestore");

const firebaseConfig = {
  apiKey: ENV.FIREBASE_API_KEY,
  authDomain: ENV.FIREBASE_AUTH_DOMAIN,
  databaseURL: ENV.FIREBASE_DB_URL,
  projectId: ENV.FIREBASE_PRJ_ID,
  storageBucket: ENV.FIREBASE_STORAGE,
  messagingSenderId: ENV.FIREBASE_SENDER_ID,
};
firebase.initializeApp(firebaseConfig);

firebase.auth().signInAnonymously().catch(function(error) {
  console.log('siginInError:' + error.code)
});

firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    const uid = user.uid;
    console.log(uid)
    initializeSurface(uid)
    initializeSheet(uid)
    initializeDigit(uid)
    initializeInterval(uid)
    initializeRecord(uid)
  } else {
    console.log('error...')
  }
});

export type RootStackParamList = {
  Home: undefined
  Start: undefined
  Setting: undefined
  Result: { answer: number, 
            correctAnswer: number, 
            surface: number, 
            sheet: number, 
            digit: number, 
            interval: number
          }
  TwoResult: { answer: number, 
               correctAnswer: number,
               answer2: number, 
               correctAnswer2: number, 
               surface: number, 
               sheet: number, 
               digit: number, 
               interval: number
             }
  ThreeResult: { answer: number, 
                 correctAnswer: number,
                 answer2: number, 
                 correctAnswer2: number, 
                 answer3: number, 
                 correctAnswer3: number, 
                 surface: number, 
                 sheet: number, 
                 digit: number, 
                 interval: number
               }
  FourResult: { answer: number, 
                correctAnswer: number,
                answer2: number, 
                correctAnswer2: number, 
                answer3: number, 
                correctAnswer3: number, 
                answer4: number, 
                correctAnswer4: number, 
                surface: number, 
                sheet: number, 
                digit: number, 
                interval: number
              }            
  Record: undefined
};

const Stack = createStackNavigator<RootStackParamList>();

const App = () => {

  return(
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" 
          component={HomeScreen} 
          options={{ headerShown: false }}
        />
        <Stack.Screen name="Start" 
          component={StartScreen} 
          options={{ headerShown: false }}
        />
        <Stack.Screen name="Setting" 
          component={SettingScreen} 
          options={{ headerShown: false }}
        />
        <Stack.Screen name="Result" 
          component={ResultScreen} 
          options={{ headerShown: false }}
        />
        <Stack.Screen name="TwoResult" 
          component={TwoResultScreen} 
          options={{ headerShown: false }}
        />
        <Stack.Screen name="ThreeResult" 
          component={ThreeResultScreen} 
          options={{ headerShown: false }}
        />
        <Stack.Screen name="FourResult" 
          component={FourResultScreen} 
          options={{ headerShown: false }}
        />
        <Stack.Screen name="Record" 
          component={RecordScreen} 
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )

}

export default App