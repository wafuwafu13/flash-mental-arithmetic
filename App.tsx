import React from 'react';
import { StyleSheet, View } from 'react-native';
import HomeScreen from './components/HomeScreen';

const App = () => {
  return(
    <View style={styles.container}>
      <HomeScreen />
    </View>
  )
}

export default App

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1B1A1A',
    alignItems: 'center'
  }
});
