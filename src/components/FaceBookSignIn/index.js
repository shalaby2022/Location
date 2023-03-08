import React, {useEffect, useState} from 'react';
import {
  Image,
  ImageBackground,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import styles from './styles';

const FbSignIn = () => {
  const [user, setUser] = useState(null);

  //   useEffect(() => {
  //   }, []);

  return (
    <View style={styles().container}>
      <ImageBackground
        source={require('../../assets/sky.jpeg')}
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

export default FbSignIn;
