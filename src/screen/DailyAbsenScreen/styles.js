import {min} from 'lodash';
import {Dimensions, StyleSheet} from 'react-native';
import {Colors, Mixins} from '../../styles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.COLOR_WHITE,
  },

  header: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    padding: Mixins.scaleSize(8),
    // backgroundColor: 'red',
    borderBottomWidth: 1,
    borderBottomColor: Colors.COLOR_GRAY,
  },

  titles: {
    marginHorizontal: Mixins.scaleSize(12),
    paddingHorizontal: Mixins.scaleSize(12),
    paddingVertical: Mixins.scaleSize(14),
  },

  nameText: {
    color: Colors.COLOR_BLACK,
  },

  leftGroup: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: Mixins.scaleSize(14),
    borderRadius: Mixins.scaleSize(24),
  },

  leftContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },

  logoutText: {
    paddingVertical: Mixins.scaleSize(18),
    paddingHorizontal: Mixins.scaleSize(15),
    borderRadius: Mixins.scaleSize(32),
    color: Colors.COLOR_RED,
  },

  images: {
    height: '100%',
    width: '100%',
    borderRadius: 12,
  },

  profileImage: {
    height: Mixins.scaleSize(24),
    width: Mixins.scaleSize(24),
    backgroundColor: Colors.COLOR_DARK_GRAY,
    marginRight: Mixins.scaleSize(8),
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 12,
  },

  topContainer: {
    padding: Mixins.scaleSize(24),
  },

  fabContainer: {
    width: 52,
    height: 52,
    backgroundColor: Colors.COLOR_RED,
    borderRadius: 26,
    position: 'absolute',
    bottom: 0,
    right: 0,
    margin: 24,
    alignItems: 'center',
    justifyContent: 'center',
  },

  fabText: {
    color: Colors.COLOR_DARK_GRAY,
  },
  listContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.COLOR_WHITE,
    marginVertical: Mixins.scaleSize(8),
    marginHorizontal: Mixins.scaleSize(24),
    borderRadius: 6,
    elevation: 2.5,
    padding: Mixins.scaleSize(12),
  },

  buttonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.COLOR_WHITE,
    marginTop: Mixins.scaleSize(14),
    marginHorizontal: Mixins.scaleSize(24),
    borderRadius: 6,
    padding: Mixins.scaleSize(12),
  },

  listParent: {
    flex: 1,
  },

  list: {
    backgroundColor: Colors.COLOR_WHITE,
    paddingTop: Mixins.scaleSize(14),
    paddingBottom: Mixins.scaleSize(380),
  },

  listInfo: {
    flex: 1,
    paddingHorizontal: Mixins.scaleSize(10),
  },

  listImageContainer: {
    backgroundColor: Colors.COLOR_RED,
    borderRadius: 6,
    alignItems: 'center',
    justifyContent: 'center',
    height: Mixins.scaleSize(62),
    width: Mixins.scaleSize(8),
  },

  listImagePlusContainer: {
    backgroundColor: Colors.COLOR_GRAY,
    borderRadius: 6,
    alignItems: 'center',
    justifyContent: 'center',
    height: Mixins.scaleSize(31),
    width: Mixins.scaleSize(31),
  },

  listTime: {
    color: Colors.COLOR_DARK_GRAY,
  },

  listImage: {
    height: '70%',
    width: '70%',
  },

  bgImage: {
    position: 'absolute',
    width: Dimensions.get('window').width,
    height: '100%',
  },

  noDataContainer: {
    flex: 1,
    alignItems: 'center',
    paddingTop: Mixins.scaleSize(160),
  },

  noDataText: {
    color: Colors.COLOR_DARK_GRAY,
  },
});

export default styles;
