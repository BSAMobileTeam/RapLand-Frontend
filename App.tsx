import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Screen } from './app/component/index';

export default function App() {
  return (
    <Screen style={styles.container}>
      <Text>Open up App.tsx to start working on your app!</Text>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
