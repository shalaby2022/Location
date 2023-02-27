import {StyleSheet} from 'react-native';

export default () =>
  StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      backgroundColor: '#F5FCFF',
    },
    welcome: {
      fontSize: 22,
      fontWeight: 'bold',
      textAlign: 'center',
      marginVertical: 20,
    },
    location: {
      color: '#333333',
      marginBottom: 5,
      paddingHorizontal: 10,
      fontSize: 16,
      fontWeight: 'bold',
    },
    button: {
      width: 120,
      height: 35,
      marginBottom: 8,
      alignItems: 'center',
      justifyContent: 'center',
      borderWidth: 1,
      borderColor: '#00f',
      borderRadius: 8,
    },
    btnText: {
      fontSize: 15,
      fontWeight: 'bold',
      color: '#00f',
    },
    mapWrapper: {
      height: 300,
      width: '95%',
      marginVertical: 10,
    },
    map: {
      borderRadius: 6,
      width: '100%',
      height: '100%',
    },
  });
