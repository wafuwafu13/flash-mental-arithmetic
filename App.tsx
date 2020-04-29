import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import firebase from 'firebase';
import ENV from './env.json'
import HomeScreen from './components/HomeScreen';
import StartScreen from './components/StartScreen';
import SettingScreen from './components/SettingScreen';

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

const Stack = createStackNavigator();

const db = firebase.firestore()
db.collection('user1').doc('surface').set({
  value: 1
})
  .then(() => {
    console.log('success')
  })
  .catch((error) => {
    console.log(error)
  })

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
      </Stack.Navigator>
    </NavigationContainer>
   
  )
}

export default App