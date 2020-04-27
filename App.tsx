import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './components/HomeScreen';
import StartScreen from './components/StartScreen';
import SettingScreen from './components/SettingScreen';

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
      </Stack.Navigator>
    </NavigationContainer>
   
  )
}

export default App