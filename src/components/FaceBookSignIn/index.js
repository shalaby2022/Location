import React, {useState} from 'react';
import {Image, ImageBackground, Text, TextInput, View} from 'react-native';
import styles from './styles';
import {
  LoginButton,
  AccessToken,
  LoginManager,
  Profile,
} from 'react-native-fbsdk-next';

const FbSignIn = () => {
  const [user, setUser] = useState({
    email: '',
    imageURL: '',
    name: '',
  });

  const fbPermissionList = ['email', 'public_profile'];

  const loginWithFacebook = () => {
    LoginManager.logInWithPermissions(fbPermissionList).then(result => {
      if (result.isCancelled) {
        console.log('login is cancelled.');
      } else {
        AccessToken.getCurrentAccessToken().then(token => {
          console.log('token', token);
        });

        Profile.getCurrentProfile().then(profile => {
          console.log('profile', profile);
          setUser({
            email: profile.email,
            imageURL: profile && profile.imageURL ? profile.imageURL : null,
            name: profile.name,
          });
        });
      }
    });
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

        <View style={styles().fbBtnWrapper}>
          <LoginButton
            style={styles().fbBtn}
            onLoginFinished={loginWithFacebook}
            onLogoutFinished={() => console.log('LogoutFinished.')}
          />
        </View>

        <View>
          {user?.name ? (
            <Text style={styles().userName}>Welcome {user.name}</Text>
          ) : null}
        </View>
        <View style={styles().userImgWrapper}>
          {user?.name ? (
            <Image source={{uri: user.imageURL}} style={styles().userImage} />
          ) : null}
        </View>
      </View>
    </View>
  );
};

export default FbSignIn;
