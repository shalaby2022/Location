import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  ActivityIndicator,
  Dimensions,
  Platform,
  PermissionsAndroid,
  TouchableOpacity,
} from 'react-native';
import styles from './styles';
import GetLocation from 'react-native-get-location';
import Geocoder from 'react-native-geocoding';
import MapView, {Marker} from 'react-native-maps';
const {width, height} = Dimensions.get('window');
const ASPECT_RATIO = width / height;
const LATITUDE_DELTA = 0.16;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;

const Location = () => {
  const [location, setLocation] = useState(null);
  const [loading, setLoading] = useState(false);
  const [region, setRegion] = useState({
    latitude: 0,
    longitude: 0,
    latitudeDelta: LATITUDE_DELTA,
    longitudeDelta: LONGITUDE_DELTA,
  });

  const onDragEnd = e => {
    setLoading(true);
    setRegion({
      longitude: e.nativeEvent.coordinate.longitude,
      latitude: e.nativeEvent.coordinate.latitude,
      latitudeDelta: LATITUDE_DELTA,
      longitudeDelta: LONGITUDE_DELTA,
    });
    Geocoder.init('AIzaSyBZQl3WIxVqdz7_8dyQXJDS8QZiQsH0Yso');
    Geocoder.from({
      lat: e.nativeEvent.coordinate.latitude,
      lng: e.nativeEvent.coordinate.longitude,
    })
      .then(json => {
        setLocation(json.results[0].formatted_address);
      })
      .catch(err => console.log('Error', err?.origin?.error_message));
    setLoading(false);
  };

  const RequestLocation = () => {
    setLoading(true);
    setLocation(null);
    GetLocation.getCurrentPosition({
      enableHighAccuracy: true,
      timeout: 150000,
    })
      .then(location => {
        const {longitude, latitude} = location;
        setRegion({
          latitude,
          longitude,
          latitudeDelta: LATITUDE_DELTA,
          longitudeDelta: LONGITUDE_DELTA,
        });
        Geocoder.init('AIzaSyCWGeHLTsC6c9V4H85gq5AaZrsTZchLzvU');
        Geocoder.from({lat: latitude, lng: longitude})
          .then(json => {
            setLocation(json.results[0].formatted_address);
          })
          .catch(err => console.log('Error', err));
        setLoading(false);
      })
      .catch(err => {
        const {code, message} = err;
        console.log('message', message);
        if (code === 'CANCELLED') {
          console.log('Location cancelled by user or by another request');
        }
        if (code === 'UNAVAILABLE') {
          console.log('Location service is disabled or unavailable');
        }
        if (code === 'TIMEOUT') {
          console.log('Location request timed out');
        }
        if (code === 'UNAUTHORIZED') {
          console.log('Authorization denied');
        }
        setLoading(false);
        setLocation(null);
      });
  };

  const getPermissions = async () => {
    if (Platform.OS == 'android') {
      try {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
          {
            title: 'Example App',
            message: 'Example App access to your location ',
          },
        );
        if (granted === PermissionsAndroid.RESULTS.GRANTED) {
          RequestLocation();
        } else {
          alert('Location permission denied');
        }
      } catch (err) {
        console.warn(err);
      }
    } else {
      RequestLocation();
    }
  };

  useEffect(() => {
    getPermissions();
  }, []);

  return (
    <View style={styles().container}>
      <Text style={styles().welcome}>Welcome to React Native!</Text>
      <Text style={styles().instructions}>
        To get location, press the button:
      </Text>
      <TouchableOpacity
        disabled={loading}
        onPress={RequestLocation}
        style={styles().button}>
        <Text style={styles().btnText}>Get Location</Text>
      </TouchableOpacity>
      {loading ? <ActivityIndicator /> : null}
      {location ? (
        <Text style={styles().location}>{JSON.stringify(location)}</Text>
      ) : null}
      <View style={styles().mapWrapper}>
        <MapView
          style={styles().map}
          region={region}
          zoomEnabled={true}
          scrollEnabled={true}
          showsScale={true}>
          <Marker
            coordinate={region}
            draggable
            onDragEnd={e => onDragEnd(e)}
            pinColor="gold"
          />
        </MapView>
      </View>
    </View>
  );
};

export default Location;
