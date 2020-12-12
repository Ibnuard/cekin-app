import * as React from 'react';
import {View, ScrollView, Text, Image} from 'react-native';
import {defaultStyles} from '../../styles/DefaultText';
import Input from '../../component/Input/component';
import {Mixins} from '../../styles';
import styles from './styles';
import {fetchData} from '../../api/apiUtils';
import {parseNumberDateTime} from '../../utlis/Utils';
import {GetDetailDatabyId} from '../../api/api';

const DetailDailyAbsenScreen = ({navigation, route}) => {
  const [data, setData] = React.useState([]);

  React.useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      console.log('refresh');
    });
    return unsubscribe;
  }, [navigation]);

  function renderPhotoContainer() {
    let base64Pict = data;
    return base64Pict ? (
      <Image
        source={{uri: `data:image/png;base64,${base64Pict}`}}
        style={styles.images}
      />
    ) : (
      <View style={styles.images}>
        <Text style={styles.textRed}>Image not found</Text>
      </View>
    );
  }

  function renderTopContainer() {
    return (
      <View style={styles.topContainer}>
        <Input
          value="Regina Putri"
          editable={false}
          style={[defaultStyles.textNormalDefault, styles.textValue]}
        />
        <Input
          value="Jumat, 12 Desember 2020"
          editable={false}
          style={[defaultStyles.textNormalDefault, styles.textValue]}
        />
      </View>
    );
  }

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={{paddingBottom: Mixins.scaleSize(24)}}
      showsVerticalScrollIndicator={false}>
      {renderPhotoContainer()}
      {renderTopContainer()}
    </ScrollView>
  );
};

export default DetailDailyAbsenScreen;
