import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import SignIn from './src/components/GoogleSignIn';
import Location from './src/components/Location';
import Locations from './src/components/Locations';
import Tracking from './src/components/Tracking';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      {/* <Location /> */}
      {/* <Locations /> */}
      {/* <Tracking /> */}
      <SignIn />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
