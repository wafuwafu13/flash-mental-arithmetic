import React from 'react';
import { StyleSheet, View } from 'react-native';
import HomeTitle from '../elements/HomeTitle';
import HomeButton from '../elements/HomeButton';

const HomeScreen = () => {
    return(
        <View>
            <HomeTitle/>
            <HomeButton type='start'>
                スタート
            </HomeButton>
            <HomeButton type='setting'>
                設定
            </HomeButton>
        </View>
    )
}

export default HomeScreen;