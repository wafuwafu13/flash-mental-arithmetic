import React from 'react';
import { StyleSheet, Text } from 'react-native';

const HomeTitle = () => {
    return(
        <Text style={styles.title}>
            多面！フラッシュ暗算
        </Text>
    )
}

export default HomeTitle;

const styles = StyleSheet.create({
    title: {
      color: '#fff',
      fontSize: 24,
      top: 100
    }
});
