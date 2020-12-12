/* eslint-disable react-hooks/exhaustive-deps */
import * as React from 'react';
import {View, Image, StatusBar} from 'react-native';
import {IMAGES} from '../../styles/Images';
import styles from './styles';
//firebae
import {AuthContext} from '../../services/Context';
import {WEB_CLIENT_ID} from '../../services/Firebase';
import {GoogleSignin} from '@react-native-community/google-signin';
import {defaultStyles} from '../../styles/DefaultText';

const SplashScreen = ({navigation}) => {
  const {logIn} = React.useContext(AuthContext);

  React.useEffect(() => {
    setTimeout(() => {
      gotoEnterCode();
    }, 1500);
  }, []);

  const gotoEnterCode = () => {
    navigation.reset({
      index: 0,
      routes: [{name: 'CodeAdmin'}],
    });
  };

  return (
    <View style={styles.container}>
      <StatusBar hidden />
      <Image source={IMAGES.logo} />
    </View>
  );
};

export default SplashScreen;
