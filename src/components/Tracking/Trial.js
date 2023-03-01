import React, {useEffect, useState} from 'react';
import {Alert, Dimensions, Text, TouchableOpacity, View} from 'react-native';
import styles from './styles';
import moment from 'moment';
import Geolocation from '@react-native-community/geolocation';
const {width, height} = Dimensions.get('window');
const ASPECT_RATIO = width / height;
const LATITUDE_DELTA = 0.76;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;

const Trial = () => {
  const [location, setLocation] = useState(null);
  const [subscriptionId, setSubscriptionId] = useState(null);

  const watchPosition = () => {
    try {
      const watchID = Geolocation.watchPosition(
        position => {
          setLocation(JSON.stringify(position));
        },
        error => Alert.alert('WatchPosition Error', JSON.stringify(error)),
      );
      setSubscriptionId(watchID);
    } catch (error) {
      Alert.alert('WatchPosition Error', JSON.stringify(error));
    }
  };

  const clearWatch = () => {
    subscriptionId !== null && Geolocation.clearWatch(subscriptionId);
    setSubscriptionId(null);
    setLocation(null);
  };

  console.log('Location', location?.timestamp);
  console.log('subscriptionId', subscriptionId);

  useEffect(() => {
    return () => {
      clearWatch();
    };
  }, []);

  return (
    <View style={{flex: 1, padding: 10}}>
      <Text style={styles().title}>position:</Text>
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
                {location?.coords?.speed}
              </Text>
            </View>

            <View style={[styles().detailBox, styles().third]}>
              <Text style={styles().valueTitle}>Altitude</Text>
              <Text style={[styles().detail, styles().largeDetail]}>
                {location?.coords?.altitude}
              </Text>
            </View>
          </View>

          <View style={{alignItems: 'flex-start'}}>
            <View style={styles().row}>
              <View style={[styles().detailBox, styles().half]}>
                <Text style={styles().valueTitle}>Latitude</Text>
                <Text style={styles().detail}>
                  {location?.coords?.latitude}
                </Text>
              </View>

              <View style={[styles().detailBox, styles().half]}>
                <Text style={styles().valueTitle}>Longitude</Text>
                <Text style={styles().detail}>
                  {location?.coords?.longitude}
                </Text>
              </View>
            </View>

            <View style={styles().row}>
              <View style={[styles().detailBox, styles().half]}>
                <Text style={styles().valueTitle}>Accuracy</Text>
                <Text style={styles().detail}>
                  {location?.coords?.accuracy}
                </Text>
              </View>

              <View style={[styles().detailBox, styles().half]}>
                <Text style={styles().valueTitle}>Heading</Text>
                <Text style={styles().detail}>{location?.coords?.heading}</Text>
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
                </Text>
              </View>
            </View>
          </View>
        </>
      )}
      {subscriptionId !== null ? (
        <TouchableOpacity onPress={clearWatch} style={styles().button}>
          <Text style={styles().buttonText}>Clear Watch</Text>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity onPress={watchPosition} style={styles().button}>
          <Text style={styles().buttonText}>Watch Position</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

export default Trial;
