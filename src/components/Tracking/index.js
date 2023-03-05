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
import MapView, {
  AnimatedRegion,
  Marker,
  MarkerAnimated,
  Polyline,
} from 'react-native-maps';
import Geolocation from '@react-native-community/geolocation';

const {width, height} = Dimensions.get('window');
const ASPECT_RATIO = width / height;
const LATITUDE_DELTA = 0.2;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;
const LATITUDE = 37.58207437;
const LONGITUDE = -122.404453;

const Tracking = () => {
  const markerRef = useRef();
  const [subscriptionId, setSubscriptionId] = useState(null);
  const [state, setState] = useState({
    latitude: LATITUDE,
    longitude: LONGITUDE,
    routeCoordinates: [],
    prevLatLng: {},
    coordinate: new AnimatedRegion({
      latitude: LATITUDE,
      longitude: LONGITUDE,
      latitudeDelta: 0,
      longitudeDelta: 0,
    }),
  });

  const initialRegion = {
    latitude: state.latitude,
    longitude: state.longitude,
    latitudeDelta: LATITUDE_DELTA,
    longitudeDelta: LONGITUDE_DELTA,
  };

  const startTracking = () => {
    const {coordinate} = state;
    const watchID = Geolocation.watchPosition(
      position => {
        const {routeCoordinates} = state;
        const {latitude, longitude} = position.coords;
        const newCoordinate = {
          latitude,
          longitude,
        };

        console.log('new', newCoordinate);
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
          routeCoordinates: [...routeCoordinates, newCoordinate],
          prevLatLng: newCoordinate,
        });

        setSubscriptionId(watchID);
      },
      error => console.log(error),
      {
        enableHighAccuracy: true,
        timeout: 20000,
        maximumAge: 1000,
        distanceFilter: 10,
      },
    );
  };

  const clearWatch = () => {
    subscriptionId !== null && Geolocation.clearWatch(subscriptionId);
    setSubscriptionId(null);
  };

  console.log('routeCoordinates', state.routeCoordinates);
  // useEffect(() => {
  //   startTracking();
  //   return () => {
  //     clearWatch();
  //   };
  // }, []);

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
        <Polyline
          coordinates={state.routeCoordinates}
          strokeWidth={5}
          strokeColor="#f00"
        />
        <Marker.Animated ref={markerRef} coordinate={state.coordinate}>
          <Image
            source={require('../../../android/app/src/main/res/drawable/car.png')}
            style={{
              width: 40,
              height: 40,
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
