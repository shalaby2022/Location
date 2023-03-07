import React, {useRef, useState} from 'react';
import {
  Dimensions,
  Image,
  Platform,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import styles from './styles';
import MapView, {AnimatedRegion, Marker, Polyline} from 'react-native-maps';
import Geolocation from '@react-native-community/geolocation';

const {width, height} = Dimensions.get('window');
const ASPECT_RATIO = width / height;
const LATITUDE_DELTA = 0.02;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;
const LATITUDE = 37.33139255;
const LONGITUDE = -122.03073253;

const Tracking = () => {
  const markerRef = useRef();
  const [subscriptionId, setSubscriptionId] = useState(null);
  let [route, setRoute] = useState([]);
  const data = {
    latitude: LATITUDE,
    longitude: LONGITUDE,
    heading: null,
    prevLatLng: {},
    coordinate: new AnimatedRegion({
      latitude: LATITUDE,
      longitude: LONGITUDE,
      latitudeDelta: 0,
      longitudeDelta: 0,
    }),
  };
  const [state, setState] = useState(data);

  const initialRegion = {
    latitude: state.latitude,
    longitude: state.longitude,
    latitudeDelta: LATITUDE_DELTA,
    longitudeDelta: LONGITUDE_DELTA,
  };

  const startTracking = () => {
    const {coordinate} = state;
    try {
      const watchID = Geolocation.watchPosition(
        position => {
          const {latitude, longitude, heading} = position.coords;
          // console.log('heading', heading);
          const newCoordinate = {
            latitude,
            longitude,
          };

          if (Platform.OS === 'android') {
            if (markerRef.current) {
              markerRef.current.animateMarkerToCoordinate(newCoordinate, 1500);
            }
          } else {
            coordinate.timing(newCoordinate).start();
          }

          setState({
            latitude,
            longitude,
            heading,
            prevLatLng: newCoordinate,
          });

          setRoute(oldRoute => [...oldRoute, {...newCoordinate}]);
          setSubscriptionId(watchID);
        },
        error => console.log(error),
        {
          enableHighAccuracy: true,
          timeout: 20000,
          maximumAge: 1000,
          distanceFilter: 5,
        },
      );
    } catch (err) {
      console.log(err.message);
    }
  };
  // console.log('Route', route);
  const clearWatch = () => {
    subscriptionId !== null && Geolocation.clearWatch(subscriptionId);
    setSubscriptionId(null);
    setState(data);
    setRoute([]);
  };

  return (
    <View style={styles().container}>
      <Text style={styles().title}>Coords :</Text>
      {state && <Text style={styles().info}>Latitude: {state.latitude}</Text>}
      {state && <Text style={styles().info}>Longitude: {state.longitude}</Text>}
      <MapView
        style={styles().map}
        showUserLocation
        followUserLocation
        loadingEnabled
        region={initialRegion}>
        <Polyline coordinates={route} strokeWidth={4} />
        <Marker.Animated
          ref={markerRef}
          coordinate={
            state.prevLatLng.hasOwnProperty('latitude')
              ? state.prevLatLng
              : state.coordinate
          }>
          <Image
            source={require('../../../android/app/src/main/res/drawable/car.png')}
            style={{
              width: 30,
              height: 60,
              transform: [{rotate: `${state.heading * 0.0124533}deg`}],
            }}
            resizeMode="contain"
          />
        </Marker.Animated>
      </MapView>
      <View style={styles().btnsWrapper}>
        <TouchableOpacity
          onPress={() => startTracking()}
          style={styles().startWrapper}>
          <Text style={styles().btnTxt}>Start</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => clearWatch()}
          style={styles().stopWrapper}>
          <Text style={styles().btnTxt}>Stop</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Tracking;
