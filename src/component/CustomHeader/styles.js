import {StyleSheet} from 'react-native';
import {Colors, Mixins} from '../../styles';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: Colors.COLOR_WHITE,
    paddingHorizontal: Mixins.scaleSize(14),
    paddingVertical: Mixins.scaleSize(8),
    height: Mixins.scaleSize(58),
    // elevation: 3,
    borderBottomWidth: 1,
    borderBottomColor: Colors.COLOR_LIGHT_GRAY,
  },

  tabContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  tabContainerActived: {
    flex: 1,
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.COLOR_RED,
  },

  textActivated: {
    color: Colors.COLOR_WHITE,
    fontSize: Mixins.scaleFont(16),
    fontWeight: '500',
  },

  textNormal: {
    color: Colors.COLOR_DARK_GRAY,
    fontWeight: '500',
  },

  header: {
    backgroundColor: Colors.COLOR_WHITE,
    flexDirection: 'row',
    alignItems: 'center',
    padding: Mixins.scaleSize(8),
    borderWidth: 0,
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
});

export default styles;
