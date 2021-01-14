import * as React from 'react';
import {View, TouchableOpacity, Text} from 'react-native';
import TouchableText from '../../component/TouchableText/component';
import Animated from 'react-native-reanimated';
import {defaultStyles} from '../../styles/DefaultText';
import styles from './styles';

const CustomHeader = ({state, descriptors, navigation, position}) => {
  const focusedOptions = descriptors[state.routes[state.index].key].options;
  if (focusedOptions.tabBarVisible === false) {
    return null;
  }

  return (
    <View>
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
          textstyle={[defaultStyles.textNormalDefault, styles.logoutText]}
          onPress={() => navigation.navigate('CodeAdmin')}
        />
      </View>
      <View style={styles.container}>
        {state.routes.map((route, index) => {
          const {options} = descriptors[route.key];
          const label =
            options.tabBarLabel !== undefined
              ? options.tabBarLabel
              : options.title !== undefined
              ? options.title
              : route.name;

          const isFocused = state.index === index;

          const onPress = () => {
            const event = navigation.emit({
              type: 'tabPress',
              target: route.key,
              canPreventDefault: true,
            });

            if (!isFocused && !event.defaultPrevented) {
              navigation.navigate(route.name);
            }
          };

          const onLongPress = () => {
            navigation.emit({
              type: 'tabLongPress',
              target: route.key,
            });
          };

          const inputRange = state.routes.map((_, i) => i);
          const opacity = Animated.interpolate(position, {
            inputRange,
            outputRange: inputRange.map((i) => (i === index ? 1 : 0)),
          });

          return (
            <TouchableOpacity
              accessibilityRole="button"
              accessibilityState={isFocused ? {selected: true} : {}}
              accessibilityLabel={options.tabBarAccessibilityLabel}
              testID={options.tabBarTestID}
              onPress={onPress}
              onLongPress={onLongPress}
              activeOpacity={0.8}
              style={
                isFocused ? styles.tabContainerActived : styles.tabContainer
              }>
              <Text
                style={[
                  isFocused ? styles.textActivated : styles.textNormal,
                  defaultStyles.textNormalDefault,
                ]}>
                {label}
              </Text>
            </TouchableOpacity>
          );
        })}
      </View>
    </View>
  );
};

export default CustomHeader;
