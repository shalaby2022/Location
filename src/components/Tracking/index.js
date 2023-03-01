import React, {useEffect, useState} from 'react';
import {
  Dimensions,
  SafeAreaView,
  ScrollView,
  Text,
  TouchableHighlight,
  View,
} from 'react-native';
// import RNLocation from 'react-native-location';
import styles from './styles';
import moment from 'moment';
const {width, height} = Dimensions.get('window');
const ASPECT_RATIO = width / height;
const LATITUDE_DELTA = 0.76;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;

const Tracking = () => {
  const [location, setLocation] = useState(null);
  const [locSubscript, setLocaSubscript] = useState(null);

  // useEffect(() => {
  //   RNLocation.configure({
  //     distanceFilter: 1.0,
  //     interval: 2000,
  //   });
  //   const sub = RNLocation.requestPermission({
  //     ios: 'whenInUse',
  //     android: {
  //       detail: 'fine',
  //       rationale: {
  //         title: 'We need to access your location',
  //         message: 'We use your location to show where you are on the map',
  //         buttonPositive: 'OK',
  //         buttonNegative: 'Cancel',
  //       },
  //     },
  //   }).then(granted => {
  //     if (granted) {
  //       startUpdatingLocation();
  //     } else {
  //       console.warn('You canceled access to location');
  //     }
  //   });
  // }, []);

  // const startUpdatingLocation = () => {
  //   const unsubscribe = RNLocation.subscribeToLocationUpdates(locations => {
  //     console.log('locations', locations);
  //     setLocation(locations[0]);
  //     setLocaSubscript(unsubscribe);
  //   });
  // };

  // const stopUpdatingLocation = () => {
  //   locSubscript && locSubscript();
  //   setLocation(null);
  // };

  return (
    <ScrollView style={styles().container}>
      <SafeAreaView style={styles().innerContainer}>
        <View style={{alignItems: 'center', marginTop: 30}}>
          <Text style={styles().title}>react-native-location</Text>
          <TouchableHighlight
            onPress={() => console.log('hello')}
            underlayColor="#CCC"
            activeOpacity={0.8}>
            <Text style={styles().repoLink}>Hello</Text>
          </TouchableHighlight>
        </View>

        <View style={styles().row}>
          <TouchableHighlight
            // onPress={startUpdatingLocation}
            style={[styles().button, {backgroundColor: '#126312'}]}>
            <Text style={styles().buttonText}>Start</Text>
          </TouchableHighlight>

          <TouchableHighlight
            // onPress={stopUpdatingLocation}
            style={[styles().button, {backgroundColor: '#881717'}]}>
            <Text style={styles().buttonText}>Stop</Text>
          </TouchableHighlight>
        </View>

        {location && (
          <>
            <View style={styles().row}>
              <View style={[styles().detailBox, styles().third]}>
                <Text style={styles().valueTitle}>Course</Text>
                <Text style={[styles().detail, styles().largeDetail]}>
                  {location.course}
                </Text>
              </View>

              <View style={[styles().detailBox, styles().third]}>
                <Text style={styles().valueTitle}>Speed</Text>
                <Text style={[styles().detail, styles().largeDetail]}>
                  {location.speed}
                </Text>
              </View>

              <View style={[styles().detailBox, styles().third]}>
                <Text style={styles().valueTitle}>Altitude</Text>
                <Text style={[styles().detail, styles().largeDetail]}>
                  {location.altitude}
                </Text>
              </View>
            </View>

            <View style={{alignItems: 'flex-start'}}>
              <View style={styles().row}>
                <View style={[styles().detailBox, styles().half]}>
                  <Text style={styles().valueTitle}>Latitude</Text>
                  <Text style={styles().detail}>{location.latitude}</Text>
                </View>

                <View style={[styles().detailBox, styles().half]}>
                  <Text style={styles().valueTitle}>Longitude</Text>
                  <Text style={styles().detail}>{location.longitude}</Text>
                </View>
              </View>

              <View style={styles().row}>
                <View style={[styles().detailBox, styles().half]}>
                  <Text style={styles().valueTitle}>Accuracy</Text>
                  <Text style={styles().detail}>{location.accuracy}</Text>
                </View>

                <View style={[styles().detailBox, styles().half]}>
                  <Text style={styles().valueTitle}>Altitude Accuracy</Text>
                  <Text style={styles().detail}>
                    {location.altitudeAccuracy}
                  </Text>
                </View>
              </View>

              <View style={styles().row}>
                <View style={[styles().detailBox, styles().half]}>
                  <Text style={styles().valueTitle}>Timestamp</Text>
                  <Text style={styles().detail}>
                    {moment(location.timestamp).format('MM-DD-YYYY')}
                  </Text>
                </View>

                <View style={[styles().detailBox, styles().half]}>
                  <Text style={styles().valueTitle}>Date / Time</Text>
                  <Text style={styles().detail}>
                    {moment(location.timestamp).format('MM-DD-YYYY h:mm:ss')}
                    {/* {location.timestamp} */}
                  </Text>
                </View>
              </View>

              <View style={styles().row}>
                <View style={[styles().detailBox, styles().full]}>
                  <Text style={styles().json}>{JSON.stringify(location)}</Text>
                </View>
              </View>
            </View>
          </>
        )}
      </SafeAreaView>
    </ScrollView>
  );
};

export default Tracking;
