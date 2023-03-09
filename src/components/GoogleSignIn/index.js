import React, {useEffect, useState} from 'react';
import {
  Image,
  ImageBackground,
  Platform,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import styles from './styles';
import {
  GoogleSignin,
  GoogleSigninButton,
  statusCodes,
} from '@react-native-google-signin/google-signin';

const SignIn = () => {
  const [user, setUser] = useState({
    email: '',
    id: '',
    givenName: '',
    familyName: '',
    photo: '', // url
    name: '', // full name
  });

  const configureSignIn = () => {
    GoogleSignin.configure({
      iosClientId:
        '908868298572-761pm6h1o8odaq7l3oa4iih96frj05jt.apps.googleusercontent.com',
      webClientId:
        Platform.OS === 'ios'
          ? '908868298572-761pm6h1o8odaq7l3oa4iih96frj05jt.apps.googleusercontent.com'
          : '908868298572-uklcdittcng62nqem2ad5f6cg9al2r2d.apps.googleusercontent.com',
      offlineAccess: false,
    });
  };

  useEffect(() => {
    configureSignIn();
  }, []);

  const signInWithGoogle = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn();
      setUser({
        email: userInfo?.user?.email,
        id: userInfo?.user?.id,
        givenName: userInfo?.user?.givenName,
        familyName: userInfo?.user?.familyName,
        photo: userInfo?.user?.photo,
        name: userInfo?.user?.name,
      });

      console.log('userInfo', userInfo);
    } catch (error) {
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        console.log('user cancelled the login flow');
      } else if (error.code === statusCodes.IN_PROGRESS) {
        console.log('operation (e.g. sign in) is in progress already');
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        console.log('play services not available or outdated');
      } else {
        console.log('some other error happened', error.message);
      }
    }
  };

  const signOut = async () => {
    try {
      await GoogleSignin.signOut();
      setUser(null); // Remember to remove the user from your app's state as well
    } catch (error) {
      console.error(error.message);
    }
  };

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

        <TouchableOpacity onPress={signOut} style={styles().socialWrapper}>
          <Text style={styles().socialText}>SignOut</Text>
        </TouchableOpacity>

        <GoogleSigninButton
          style={styles().googleBtn}
          size={GoogleSigninButton.Size.Wide}
          color={GoogleSigninButton.Color.Dark}
          onPress={signInWithGoogle}
        />

        <View>
          {user?.name ? (
            <Text style={styles().userName}>Welcome {user.name}</Text>
          ) : null}
        </View>
        <View style={styles().userImgWrapper}>
          {user?.name ? (
            <Image source={{uri: user.photo}} style={styles().userImage} />
          ) : null}
        </View>
      </View>
    </View>
  );
};

export default SignIn;
