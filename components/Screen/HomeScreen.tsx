import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

import HomeTitle from '../../elements/HomeTitle';
import HomeButton from '../../elements/HomeButton';

import { RootStackParamList } from '../../App';
import { StackNavigationProp } from '@react-navigation/stack';

type HomeScreenNavigationProp = StackNavigationProp<
    RootStackParamList,
    'Home'
>;

type Props = {
    navigation: HomeScreenNavigationProp;
};

const HomeScreen: React.FC<Props> = ({ navigation }) => {

    return(
        <View style={styles.container}>
            <View style={styles.title}>
                <HomeTitle />
            </View>
            <View style={styles.button}>  
                <HomeButton type='start' onPress={() => navigation.navigate('Setting')}>
                    <Text style={styles.buttonText}>スタート</Text>
                </HomeButton>
                <HomeButton type='setting' onPress={() => navigation.navigate('Setting')}>
                    <Text style={styles.buttonText}>設 定</Text>
                </HomeButton>
                <HomeButton type='record' onPress={() => navigation.navigate('Record')}>
                    <Text style={styles.buttonText}>記 録</Text>
                </HomeButton>
            </View>
        </View>
    )
}

export default HomeScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#1B1A1A',
        alignItems: 'center'
    },
    title: {
        flex: 1,
        top: wp('35%')
    },
    button: {
        flex: 1
    },
    buttonText: {
        color: '#FEFFF3',
        fontSize: wp('5%')
    }
})