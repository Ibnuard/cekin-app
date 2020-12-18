import * as React from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StatusBar,
} from 'react-native';
import TouchableText from '../../component/TouchableText/component';
import { defaultStyles } from '../../styles/DefaultText';
import styles from './styles';
import Indicator from '../../component/Modal/Indicator/component';
import { IMAGES } from '../../styles/Images';
import { Colors } from '../../styles';
import _ from 'lodash';
import Spinner from '../../component/Spinner/component';

import ModalSelector from '../../component/Modal/component';

const DailyAbsenScreen = ({ navigation }) => {
  React.useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      console.log('refresh');
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
        {/* <View style={styles.header}>
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
              </View>*/}
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
