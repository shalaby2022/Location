import React from 'react';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import Location from './src/components/Location';
import Locations from './src/components/Locations';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      {/* <Location /> */}
      <Locations />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
