import {View, Text} from 'react-native';
import React, {useEffect} from 'react';
import styles from './styles';
import inAppMessaging from '@react-native-firebase/in-app-messaging';

const InAppMsg = () => {
  const bootstrap = async () => {
    await inAppMessaging().setMessagesDisplaySuppressed(true);
  };

  const onSetup = async user => {
    await setupUser(user);
    // Allow user to receive messages now setup is complete
    inAppMessaging().setMessagesDisplaySuppressed(false);
  };

  //   useEffect(() => {
  //     console.log('Screen Rendered');
  //     bootstrap();
  //   }, []);

  return (
    <View style={styles().container}>
      <Text style={styles().text}>InAppMsg</Text>
    </View>
  );
};

export default InAppMsg;
