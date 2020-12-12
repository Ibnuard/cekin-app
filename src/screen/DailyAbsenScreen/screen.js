import * as React from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  FlatList,
  StatusBar,
  Platform,
  Animated,
  ScrollView,
  Alert,
} from 'react-native';
import TouchableText from '../../component/TouchableText/component';
import {defaultStyles} from '../../styles/DefaultText';
import styles from './styles';
import {GoogleSignin} from '@react-native-community/google-signin';
import {AuthContext} from '../../services/Context';
import {ReadDatabase, WEB_CLIENT_ID} from '../../services/Firebase';
import auth from '@react-native-firebase/auth';
import Indicator from '../../component/Modal/Indicator/component';
import {
  getLocaleDate,
  parseNumberDateTime,
  stringToMD5,
} from '../../utlis/Utils';
import {IMAGES} from '../../styles/Images';
import {fetchData} from '../../api/apiUtils';
import {GetDataByHash, IsTodayAbsen} from '../../api/api';
import SwipeableModal from '../../component/Modal/SwipeableModal/component';
import {Colors} from '../../styles';
import _ from 'lodash';
import Spinner from '../../component/Spinner/component';

import ModalSelector from '../../component/Modal/component';

const DailyAbsenScreen = ({navigation}) => {
  const user = auth().currentUser;
  const hash = stringToMD5(user.email);

  const offset = React.useRef(new Animated.Value(0)).current;

  const {logOut} = React.useContext(AuthContext);

  React.useEffect(() => {
    // configureGoogleSignIn();
  }, []);

  React.useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      console.log('refresh');
      // setDataState('init');
      // getUserName();
      // getData();
    });

    return unsubscribe;
  }, [navigation]);

  function renderTopContainer() {
    return (
      <>
        <StatusBar
          backgroundColor={Colors.COLOR_RED}
          barStyle={'light-content'}
        />
        <View style={styles.header}>
          <View style={styles.leftContainer}>
            <View style={styles.leftGroup}>
              <Text
                numberOfLines={1}
                style={[
                  defaultStyles.textBold,
                  defaultStyles.textLargeDefault,
                  styles.nameText,
                ]}>
                Admin
              </Text>
            </View>
          </View>
          <TouchableText
            text={'Keluar'}
            textstyle={[defaultStyles.textLargeDefault, styles.logoutText]}
            onPress={() => navigation.navigate('CodeAdmin')}
          />
        </View>
      </>
    );
  }

  function renderList() {
    return (
      <TouchableOpacity
        style={styles.listContainer}
        activeOpacity={0.6}
        onPress={() =>
          navigation.navigate('DetailDailyAbsen', {
            name: 'Regina Putri',
            id: 1,
            date: 20.0,
          })
        }>
        <View style={styles.listImageContainer} />
        <View style={styles.listInfo}>
          <Text
            style={[defaultStyles.textNormalDefault, defaultStyles.textBold]}>
            Regina Putri
          </Text>
          <Text>Lokasi absen Jl. Gatotsubroto</Text>
          <Text style={[defaultStyles.textSmallDefault, styles.listTime]}>
            20.00
          </Text>
        </View>
        <Image source={IMAGES.checklist} />
      </TouchableOpacity>
    );
  }

  return (
    <View style={styles.container}>
      {renderTopContainer()}
      {renderList()}
    </View>
  );
};

export default DailyAbsenScreen;
