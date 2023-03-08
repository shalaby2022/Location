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
import {
  LoginButton,
  AccessToken,
  LoginManager,
  GraphRequest,
} from 'react-native-fbsdk-next';

const FbSignIn = () => {
  const [user, setUser] = useState({
    firstname: '',
    lastname: '',
    email: '',
    avatar: '',
    social_type: '',
  });
  const fbPermissionList = ['email', 'public_profile'];

  const responseInfoCallback = async (error, result) => {
    if (error) {
      console.log(`Error fetching data:  ${error.toString()}`);
    } else {
      console.log(`Success fetching data: ${result.toString()}`);
      setUser({
        firstname: '',
        lastname: result.last_name,
        email: result.email,
        avatar: result && result.picture ? result.picture.data.url : null,
        social_type: 'facebook',
      });
    }
  };

  const loginWithFacebook = () => {
    LoginManager.logInWithPermissions(fbPermissionList).then(result => {
      if (result.isCancelled) {
        console.log('login is cancelled.');
      } else {
        AccessToken.getCurrentAccessToken().then(data => {
          const userInfo = new GraphRequest(
            '/me',
            {
              accessToken: data.accessToken.toString(),
              parameters: {
                fields: {
                  string: 'email,name, first_name, last_name, picture',
                },
              },
            },
            responseInfoCallback,
          );
          new GraphRequestManager().addRequest(userInfo).start();
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
            <Image source={{uri: user.photo}} style={styles().userImage} />
          ) : null}
        </View>
      </View>
    </View>
  );
};

export default FbSignIn;
