import React from 'react';
import { StyleSheet, View, Text, TouchableHighlight } from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

const ResultScreen = ({ navigation, route }: any) => {
    return(
        <View style={styles.container}>
            { route.params.answer == route.params.correctAnswer && 
              route.params.answer2 == route.params.correctAnswer2 &&
              route.params.answer3  == route.params.correctAnswer3 &&
              route.params.answer4  == route.params.correctAnswer4 ? (
                <Text>成功</Text>
              ) : (
                <Text>失敗</Text>
              )
            }
            <Text>あなたの解答　{route.params.answer}</Text>
            <Text>あなたの解答2　{route.params.answer2}</Text>
            <Text>あなたの解答3　{route.params.answer3}</Text>
            <Text>あなたの解答4　{route.params.answer4}</Text>
            <Text>正解　{route.params.correctAnswer}</Text>
            <Text>正解2　{route.params.correctAnswer2}</Text>
            <Text>正解3　{route.params.correctAnswer3}</Text>
            <Text>正解4　{route.params.correctAnswer4}</Text>
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