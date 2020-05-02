import React from 'react';
import { StyleSheet, View, Text, TouchableHighlight } from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

const ResultScreen = ({ navigation, route }: any) => {
    return(
        <View style={styles.container}>
            { route.params.answer == route.params.correctAnswer ? (
                <Text>成功</Text>
              ) : (
                <Text>失敗</Text>
              )
            }
            <Text>あなたの解答　{route.params.answer}</Text>
            <Text>正解　{route.params.correctAnswer}</Text>
            <TouchableHighlight
              onPress={() => navigation.navigate('Start')}
            >
                <Text>もう一度</Text>
            </TouchableHighlight>
            <TouchableHighlight
              onPress={() => navigation.navigate('Home')}
            >
                <Text>ホームへ</Text>
            </TouchableHighlight>
        </View>
    )
}

export default ResultScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
})