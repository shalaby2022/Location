import {StyleSheet} from 'react-native';

export default () =>
  StyleSheet.create({
    container: {
      flex: 1,
      paddingBottom: 7,
    },
    image: {
      height: 330,
      justifyContent: 'center',
    },
    wrapper: {
      width: '100%',
      height: '100%',
      backgroundColor: '#eee',
      borderTopRightRadius: 45,
      borderTopLeftRadius: 45,
      position: 'absolute',
      top: 250,
    },
    headerWrapper: {
      alignItems: 'center',
      alignSelf: 'center',
      paddingVertical: 15,
    },
    signText: {
      color: '#03f',
      fontSize: 50,
      fontWeight: 'bold',
    },
    inputsWrapper: {
      width: '100%',
      marginBottom: 10,
    },
    infoHeader: {
      fontSize: 16,
      fontWeight: 'bold',
      paddingLeft: 20,
      paddingVertical: 10,
      color: '#333',
    },
    input: {
      height: 45,
      borderRadius: 20,
      borderColor: '#ccc',
      borderWidth: 1,
      width: '90%',
      alignSelf: 'center',
      paddingHorizontal: 10,
    },
    socialWrapper: {
      marginTop: 20,
      flexDirection: 'row',
      alignItems: 'center',
      borderWidth: 1,
      borderColor: '#ccc',
      borderRadius: 20,
      width: '55%',
      paddingVertical: 8,
      alignSelf: 'center',
    },
    socialImg: {
      height: 25,
      width: 25,
      paddingHorizontal: 25,
    },
    socialText: {},
    googleBtn: {
      width: 192,
      height: 48,
      alignSelf: 'center',
      marginTop: 20,
    },
    userName: {
      color: '#03f',
      fontSize: 16,
      fontWeight: 'bold',
      textAlign: 'center',
      paddingVertical: 15,
    },
    userImage: {
      width: 100,
      height: 100,
      borderRadius: 50,
    },
    userImgWrapper: {
      width: '30%',
      alignSelf: 'center',
    },
  });
