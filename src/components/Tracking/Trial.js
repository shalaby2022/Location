import React, {useEffect, useState} from 'react';
import {
  Dimensions,
  SafeAreaView,
  ScrollView,
  Text,
  TouchableHighlight,
  View,
} from 'react-native';
import styles from './styles';
import moment from 'moment';
const {width, height} = Dimensions.get('window');
const ASPECT_RATIO = width / height;
const LATITUDE_DELTA = 0.76;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;

const Trial = () => {
  const [location, setLocation] = useState(null);
  const [locSubscript, setLocaSubscript] = useState(null);

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

export default Trial;

// {
//   const watchPosition = () => {
//     try {
//       const watchID = Geolocation.watchPosition(
//         position => {
//           setLocation(JSON.stringify(position));
//         },
//         error => Alert.alert('WatchPosition Error', JSON.stringify(error)),
//         {
//           enableHighAccuracy: true,
//           timeout: 20000,
//           maximumAge: 1000,
//           distanceFilter: 10,
//         },
//       );
//       setSubscriptionId(watchID);
//     } catch (error) {
//       Alert.alert('WatchPosition Error', JSON.stringify(error));
//     }
//   };

//   const clearWatch = () => {
//     subscriptionId !== null && Geolocation.clearWatch(subscriptionId);
//     setSubscriptionId(null);
//     setLocation(null);
//   };

//   useEffect(() => {
//     return () => {
//       clearWatch();
//     };
//   }, []);
// }

// {
//   {location && (
//     <>
//       <View style={styles().row}>
//         <View style={[styles().detailBox, styles().third]}>
//           <Text style={styles().valueTitle}>Course</Text>
//           <Text style={[styles().detail, styles().largeDetail]}>
//             {location.course}
//           </Text>
//         </View>

//         <View style={[styles().detailBox, styles().third]}>
//           <Text style={styles().valueTitle}>Speed</Text>
//           <Text style={[styles().detail, styles().largeDetail]}>
//             {location?.coords?.speed}
//           </Text>
//         </View>

//         <View style={[styles().detailBox, styles().third]}>
//           <Text style={styles().valueTitle}>Altitude</Text>
//           <Text style={[styles().detail, styles().largeDetail]}>
//             {location.coords?.altitude}
//           </Text>
//         </View>
//       </View>

//       <View style={{alignItems: 'flex-start'}}>
//         <View style={styles().row}>
//           <View style={[styles().detailBox, styles().half]}>
//             <Text style={styles().valueTitle}>Latitude</Text>
//             <Text style={styles().detail}>{location.coords?.latitude}</Text>
//           </View>

//           <View style={[styles().detailBox, styles().half]}>
//             <Text style={styles().valueTitle}>Longitude</Text>
//             <Text style={styles().detail}>
//               {location?.coords?.longitude}
//             </Text>
//           </View>
//         </View>

//         <View style={styles().row}>
//           <View style={[styles().detailBox, styles().half]}>
//             <Text style={styles().valueTitle}>Accuracy</Text>
//             <Text style={styles().detail}>
//               {location?.coords?.accuracy}
//             </Text>
//           </View>

//           <View style={[styles().detailBox, styles().half]}>
//             <Text style={styles().valueTitle}>Heading</Text>
//             <Text style={styles().detail}>{location?.coords?.heading}</Text>
//           </View>
//         </View>

//         <View style={styles().row}>
//           <View style={[styles().detailBox, styles().half]}>
//             <Text style={styles().valueTitle}>Timestamp</Text>
//             <Text style={styles().detail}>
//               {/* {moment(location?.timestamp).format('MM-DD-YYYY')} */}
//               {location.timestamp}
//             </Text>
//           </View>

//           <View style={[styles().detailBox, styles().half]}>
//             <Text style={styles().valueTitle}>Date / Time</Text>
//             <Text style={styles().detail}>
//               {/* {moment(location?.timestamp).format('MM-DD-YYYY h:mm:ss')} */}
//               {location.timestamp}
//             </Text>
//           </View>
//         </View>
//       </View>
//     </>
//   )}
// }
