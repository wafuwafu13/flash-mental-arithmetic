import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import firebase from 'firebase';
import ENV from './env.json'

import HomeScreen from './components/HomeScreen';
import StartScreen from './components/StartScreen';
import SettingScreen from './components/SettingScreen';
import ResultScreen from './components/ResultScreen';
import TwoResultScreen from './components/TwoResultScreen';

import { initializeSurface } from './database/InitializeSurface';
import { initializeSheet } from './database/InitializeSheet';
import { initializeDigit } from './database/InitializeDigit';
import { initializeInterval } from './database/InitializeInterval';

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
    initializeSurface(uid)
    initializeSheet(uid)
    initializeDigit(uid)
    initializeInterval(uid)
  } else {
    console.log('error...')
  }
});

const Stack = createStackNavigator();

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
      </Stack.Navigator>
    </NavigationContainer>
  )

}

export default App