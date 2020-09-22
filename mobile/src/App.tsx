import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar, View, StyleSheet } from 'react-native';
import { Routes } from './routes';
import { colors } from './theme';
const App: React.FC = () => {
  return (
    <NavigationContainer>
      <StatusBar barStyle="light-content" />
      <View style={styles.container}>
        <Routes />
      </View>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    height: '100%',
    // flex: 1,
    backgroundColor: colors.background
  }
})

export default App;
