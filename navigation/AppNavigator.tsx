import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from '../components/Screen/HomeScreen';
import StartScreen from '../components/Screen/StartScreen';
import SettingScreen from '../components/Screen/SettingScreen';
import ResultScreen from '../components/Screen/ResultScreen';
import TwoResultScreen from '../components/Screen/TwoResultScreen';
import ThreeResultScreen from '../components/Screen/ThreeResultScreen';
import FourResultScreen from '../components/Screen/FourResultScreen';
import RecordScreen from '../components/Screen/RecordScreen';

import { RootStackParamList } from '../types/RootStackParamList';

const Stack = createStackNavigator<RootStackParamList>();

const AppNavigator = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Home">
                <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
                <Stack.Screen
                    name="Start"
                    component={StartScreen}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="Setting"
                    component={SettingScreen}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="Result"
                    component={ResultScreen}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="TwoResult"
                    component={TwoResultScreen}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="ThreeResult"
                    component={ThreeResultScreen}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="FourResult"
                    component={FourResultScreen}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="Record"
                    component={RecordScreen}
                    options={{ headerShown: false }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default AppNavigator;
