import {StyleSheet} from 'react-native';

export default () =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#CCCCCC',
    },
    innerContainer: {
      marginVertical: 30,
    },
    title: {
      fontSize: 24,
      fontWeight: 'bold',
    },
    repoLink: {
      textAlign: 'center',
      fontSize: 12,
      fontWeight: 'bold',
      color: '#0000CC',
      textDecorationLine: 'underline',
    },
    row: {
      flexDirection: 'row',
      alignItems: 'flex-start',
      justifyContent: 'space-between',
      marginTop: 5,
      marginBottom: 5,
    },
    detailBox: {
      padding: 15,
      justifyContent: 'center',
    },
    button: {
      width: '50%',
      paddingVertical: 8,
      marginVertical: 10,
      borderWidth: 1,
      borderColor: '#00f',
      borderRadius: 20,
      justifyContent: 'center',
      alignItems: 'center',
      alignSelf: 'center',
    },
    buttonText: {
      fontSize: 20,
      color: '#00f',
    },
    valueTitle: {
      fontFamily: 'Futura',
      fontSize: 12,
    },
    detail: {
      fontSize: 15,
      fontWeight: 'bold',
    },
    largeDetail: {
      fontSize: 20,
    },
    json: {
      fontSize: 18,
      fontFamily: 'Courier',
      textAlign: 'center',
      fontWeight: 'bold',
    },
    full: {
      width: '100%',
    },
    half: {
      width: '50%',
    },
    third: {
      width: '33%',
    },
    info: {
      paddingHorizontal: 10,
      fontWeight: '500',
      color: '#f0f',
      fontSize: 20,
      marginVertical: 10,
    },
  });
