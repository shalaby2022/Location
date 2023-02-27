import React from 'react';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import Location from './src/components/Location';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Location />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
