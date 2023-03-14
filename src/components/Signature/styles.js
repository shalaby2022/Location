import {StyleSheet} from 'react-native';

export default () =>
  StyleSheet.create({
    container: {
      flex: 1,
      padding: 10,
      backgroundColor: '#eee',
    },
    preview: {
      width: '100%',
      height: 500,
      backgroundColor: '#F8F8F8',
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 15,
    },
    image: {
      width: 335,
      height: 114,
    },
    previewText: {
      color: '#FFF',
      fontSize: 14,
      height: 40,
      lineHeight: 40,
      paddingLeft: 10,
      paddingRight: 10,
      backgroundColor: '#69B2FF',
      width: 120,
      textAlign: 'center',
      marginTop: 10,
    },
    webstyle: `.m-signature-pad--footer {display: none; margin: 0px;}`,
    row: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      width: '100%',
      alignItems: 'center',
    },
    convertWrapper: {
      width: '50%',
      backgroundColor: '#00f',
      paddingVertical: 10,
      borderRadius: 10,
      alignSelf: 'center',
      alignItems: 'center',
      marginTop: 10,
    },
    convertText: {
      color: '#fff',
      fontWeight: 'bold',
      fontSize: 16,
    },
  });