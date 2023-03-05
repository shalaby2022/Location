import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import Location from './src/components/Location';
import Locations from './src/components/Locations';
import Tracking from './src/components/Tracking';
import Trial from './src/components/Tracking/Trial';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      {/* <Location /> */}
      {/* <Locations /> */}
      <Tracking />
      {/* <Trial /> */}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
