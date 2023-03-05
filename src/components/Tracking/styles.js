import {StyleSheet} from 'react-native';

export default () =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#000',
      paddingBottom: 7,
    },
    innerContainer: {
      marginVertical: 30,
    },
    title: {
      fontSize: 24,
      fontWeight: 'bold',
      paddingLeft: 10,
      paddingTop: 20,
      color: '#fff',
    },
    info: {
      paddingHorizontal: 10,
      fontWeight: 'bold',
      color: '#ccc',
      fontSize: 18,
      marginVertical: 3,
    },
    map: {
      alignSelf: 'center',
      width: '96%',
      flex: 1,
      marginVertical: 10,
      borderRadius: 10,
    },
    btnsWrapper: {
      width: '96%',
      flexDirection: 'row',
      alignSelf: 'center',
      justifyContent: 'space-between',
    },
    startWrapper: {
      width: '46%',
      paddingVertical: 10,
      alignSelf: 'center',
      backgroundColor: '#0af',
      borderRadius: 20,
      alignItems: 'center',
    },
    stopWrapper: {
      width: '46%',
      paddingVertical: 10,
      alignSelf: 'center',
      backgroundColor: 'tomato',
      borderRadius: 20,
      alignItems: 'center',
    },
    btnTxt: {
      fontSize: 18,
      fontWeight: 'bold',
      color: '#fff',
    },
  });
