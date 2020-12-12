import {Dimensions, StyleSheet} from 'react-native';
import {Colors, Mixins} from '../../styles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.COLOR_WHITE,
    padding: Mixins.scaleSize(24),
  },

  topContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  logo: {
    // backgroundColor: 'red',
    paddingHorizontal: 50,
  },

  bottomContainer: {
    flexDirection: 'row',
    alignSelf: 'center',
  },

  inputContainer: {
    alignItems: 'center',
    width: '90%',
    marginTop: Mixins.scaleSize(36),
  },

  buttonContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '40%',
    height: '6%',
    marginTop: Mixins.scaleSize(36),
    backgroundColor: Colors.COLOR_RED,
    borderRadius: Mixins.scaleSize(32),
  },

  button: {
    width: '90%',
  },

  buttonText: {
    color: Colors.COLOR_WHITE,
  },

  backgroundContainer: {
    width: Dimensions.get('window').width,
    position: 'absolute',
    bottom: 0,
  },

  bg: {
    width: '100%',
  },

  input: {
    width: '90%',
    alignItems: 'center',
    paddingHorizontal: Mixins.scaleSize(25),
  },

  textButton: {
    marginHorizontal: Mixins.scaleSize(8),
  },

  subtitle: {
    marginTop: Mixins.scaleSize(8),
  },
});

export default styles;
