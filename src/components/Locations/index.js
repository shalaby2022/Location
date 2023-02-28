import React, {useState} from 'react';
import {View, Text, Dimensions, Image} from 'react-native';
import styles from './styles';
import MapView, {Marker} from 'react-native-maps';
const {width, height} = Dimensions.get('window');
const ASPECT_RATIO = width / height;

const Locations = () => {
  const [location, setLocation] = useState(null);
  const [region, setRegion] = useState({
    longitude: 77.216721,
    latitude: 28.6448,
    longitudeDelta: 0.0421,
    latitudeDelta: 0.0922,
  });
  const [markers, setMarkers] = useState([
    {
      longitude: 77.216721,
      latitude: 28.6448,
      longitudeDelta: 0.0421,
      latitudeDelta: 0.0922,
    },
    {
      longitude: 77.20434,
      latitude: 28.62627,
      longitudeDelta: 0.0421,
      latitudeDelta: 0.0922,
    },
    {
      longitude: 77.23424,
      latitude: 28.6243,
      longitudeDelta: 0.0421,
      latitudeDelta: 0.0922,
    },
  ]);

  return (
    <View style={styles().container}>
      <Text style={styles().welcome}>Welcome to React Native!</Text>
      {location ? (
        <Text style={styles().location}>{JSON.stringify(location)}</Text>
      ) : null}
      <View style={styles().mapWrapper}>
        <MapView
          style={styles().map}
          initialRegion={region}
          zoomEnabled={true}
          scrollEnabled={true}>
          {markers.map((marker, index) => (
            <Marker key={index} coordinate={marker}>
              <View>
                <Image
                  style={{width: 40, height: 40}}
                  source={require('../../../android/app/src/main/res/drawable/car.png')}
                />
              </View>
            </Marker>
          ))}
        </MapView>
      </View>
    </View>
  );
};

export default Locations;
