import * as React from 'react';
import { View, Text, Image, StatusBar } from 'react-native';
import Input from '../../component/Input/component';
import { Colors } from '../../styles';
import { defaultStyles } from '../../styles/DefaultText';
import { IMAGES } from '../../styles/Images';
import styles from './styles';
import TouchableText from '../../component/TouchableText/component';

//firebase
import { GoogleSignin } from '@react-native-community/google-signin';
import auth from '@react-native-firebase/auth';
import { AuthContext } from '../../services/Context';

//firebase
import Indicator from '../../component/Modal/Indicator/component';
import {
  ReadDatabase,
  WEB_CLIENT_ID,
  WriteToDatabase,
} from '../../services/Firebase';
import { stringToMD5 } from '../../utlis/Utils';
import Button from '../../component/Button/component';

const CodeAdminScreen = ({ navigation }) => {
  const { logIn } = React.useContext(AuthContext);

  // const [indicator, showIndicator] = React.useState(false);

  // React.useEffect(() => {
  //   configureGoogleSignIn();
  // }, []);

  // function configureGoogleSignIn() {
  //   GoogleSignin.configure({
  //     offlineAccess: false,
  //     webClientId: WEB_CLIENT_ID,
  //   });
  // }
  // async function SignInWithGoogle() {
  //   showIndicator(true);
  //   const {idToken} = await GoogleSignin.signIn();
  //   const googleCredential = auth.GoogleAuthProvider.credential(idToken);

  //   return auth().signInWithCredential(googleCredential);
  // }

  // function checkUser() {
  //   console.log('checking user');
  //   const user = auth().currentUser;
  //   const hash = stringToMD5(user?.email);
  //   const path = `/Root/Users/${hash}`;

  //   ReadDatabase(
  //     path,
  //     (value) => (value ? logIn() : saveDataToDatabase(user, path)),
  //     (error) => console.log('Error'),
  //   );
  // }

  // async function saveDataToDatabase(user, path) {
  //   console.log('Save data to db');
  //   const data = {
  //     name: user?.displayName,
  //     email: user?.email,
  //   };
  //   WriteToDatabase(
  //     path,
  //     data,
  //     false,
  //     () => logIn(),
  //     (error) => console.log('Error'),
  //   );
  // }

  /**
   *
   * GAP BETWEEN RENDER FUNCTION AND FUNCTIONAL
   *
   */

  const LogoContainer = () => {
    return (
      <View style={styles.topContainer}>
        <Image source={IMAGES.logo} style={styles.logo} />
        <Text style={[defaultStyles.textNormalDefault, styles.subtitle]}>
          Absen Online dan Event
        </Text>
        {InputContainer()}
        {ButtonContainer()}
      </View>
    );
  };

  const InputContainer = () => {
    return (
      <View style={styles.inputContainer}>
        <Input
          style={styles.input}
          placeholder="Masukan 6 digit kode masuk admin"
        />
      </View>
    );
  };

  const goDailyAbsen = () => {
    navigation.navigate('AdminHome');
  };

  const ButtonContainer = () => {
    return (
      <View style={styles.buttonContainer}>
        <TouchableText
          text={'Kirim'}
          textstyle={[defaultStyles.textLargeDefault, styles.buttonText]}
          onPress={() => goDailyAbsen()}
        />
      </View>
    );
  };

  const BackgroundContainer = () => {
    return (
      <View style={styles.backgroundContainer}>
        <Image
          source={IMAGES.auth_bg}
          style={styles.bg}
          resizeMode={'stretch'}
        />
      </View>
    );
  };

  const CustomStatusBar = () => {
    return (
      <StatusBar
        backgroundColor={Colors.COLOR_WHITE}
        barStyle={'dark-content'}
      />
    );
  };

  // const IndicatorModal = () => {
  //   return <Indicator visible={indicator} />;
  // };

  return (
    <View style={styles.container}>
      {CustomStatusBar()}
      {LogoContainer()}
      {BackgroundContainer()}
    </View>
  );
};

export default CodeAdminScreen;
