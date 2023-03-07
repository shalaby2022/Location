import React, {useState} from 'react';
import {
  Dimensions,
  Image,
  ImageBackground,
  Platform,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import styles from './styles';

const image = {uri: 'https://reactjs.org/logo-og.png'};
const {width, height} = Dimensions.get('window');
const ASPECT_RATIO = width / height;

const GoogleSignIn = () => {
  return (
    <View style={styles().container}>
      <ImageBackground
        source={image}
        resizeMode="cover"
        style={styles().image}
      />
      <View style={styles().wrapper}>
        <View style={styles().headerWrapper}>
          <Text style={styles().signText}>Login</Text>
        </View>
        <View style={styles().inputsWrapper}>
          <Text style={styles().infoHeader}>UserName:</Text>
          <TextInput style={styles().input} />
        </View>
        <View style={styles().inputsWrapper}>
          <Text style={styles().infoHeader}>Email:</Text>
          <TextInput style={styles().input} />
        </View>
        <View style={styles().socialWrapper}>
          <Image
            source={require('../../assets/google.png')}
            resizeMode="contain"
            style={styles().socialImg}
          />
          <TouchableOpacity>
            <Text style={styles().socialText}>Sign in with Google</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default GoogleSignIn;
