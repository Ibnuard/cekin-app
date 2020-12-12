import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from '../screen/HomeScreen/screen';
import SplashScreen from '../screen/SplashScreen/screen';
import SigninGoogleScreen from '../screen/SigninGoogleScreen/screen';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {TabIconDaily, TabIconEvent} from '../component/TabIcon/TabIcon';
import {Colors, Typography} from '../styles';
import {getIsTabBarVisible} from '../utlis/Utils';
import DailyScreen from '../screen/DailyScreen/screen';
import EventScreen from '../screen/EventScreen/screen';
import AbsenScreen from '../screen/AbsenScreen/screen';
import BottomTab from '../component/BottomTab/component';
import DetailScreen from '../screen/DetailScreen/screen';
import CodeAdminScreen from '../screen/CodeAdminScreen/screen';
import DailyAbsenScreen from '../screen/DailyAbsenScreen/screen';
import DetailDailyAbsenScreen from '../screen/DetailDailyAbsenScreen/screen';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

export const SplashStack = () => {
  return (
    <Stack.Navigator initialRouteName={'Splash'}>
      <Stack.Screen
        name="Splash"
        component={SplashScreen}
        options={{
          headerShown: false,
          animationEnabled: false,
        }}
      />
      <Stack.Screen
        name="CodeAdmin"
        component={CodeAdminStack}
        options={{
          headerShown: false,
          animationEnabled: false,
        }}
      />
      <Stack.Screen
        name="DailyAbsen"
        component={DailyAbsenStack}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
};

export const AuthStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="SignIn"
        component={SigninGoogleScreen}
        options={{
          headerShown: false,
          animationEnabled: false,
        }}
      />
    </Stack.Navigator>
  );
};

export const HomeStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={({route}) => ({
          headerShown: false,
          animationEnabled: false,
        })}
      />
    </Stack.Navigator>
  );
};

export const HomeTabStack = () => {
  return (
    <Tab.Navigator
      initialRouteName={'Daily'}
      tabBar={(props) => <BottomTab {...props} />}
      screenOptions={({route}) => ({
        tabBarVisible: getIsTabBarVisible(route),
      })}
      backBehavior={'initialRoute'}
      tabBarOptions={{
        activeTintColor: Colors.COLOR_RED,
        inactiveTintColor: Colors.COLOR_LIGHT_GRAY,
        labelStyle: {
          fontSize: Typography.FONT_SIZE_12,
          fontFamily: Typography.FONT_NUNITO_REGULAR,
          lineHeight: Typography.LINE_HEIGHT_14,
        },
      }}>
      <Tab.Screen
        name="DailyStack"
        component={DailyStack}
        options={{
          tabBarIcon: ({focused}) => <TabIconDaily focused={focused} />,
          tabBarLabel: 'Harian',
        }}
      />
      <Tab.Screen
        name="EventStack"
        component={EventStack}
        options={{
          tabBarIcon: ({focused}) => <TabIconEvent focused={focused} />,
          tabBarLabel: 'Acara',
        }}
      />
    </Tab.Navigator>
  );
};

export const DailyStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Daily"
        component={DailyScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Absen"
        component={AbsenScreen}
        options={{
          title: 'Buat Absen',
          headerShown: true,
          animationEnabled: false,
        }}
      />
      <Stack.Screen
        name="Detail"
        component={DetailScreen}
        options={{
          title: 'Detail Absen',
          headerShown: true,
          animationEnabled: false,
        }}
      />
    </Stack.Navigator>
  );
};
export const EventStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Event"
        component={EventScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Absen"
        component={AbsenScreen}
        options={{
          title: 'Buat Absen',
          headerShown: true,
          animationEnabled: false,
        }}
      />
    </Stack.Navigator>
  );
};

export const CodeAdminStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="CodeAdmin"
        component={CodeAdminScreen}
        options={{
          headerShown: false,
          animationEnabled: false,
        }}
      />
    </Stack.Navigator>
  );
};

export const DailyAbsenStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="DailyAbsen"
        component={DailyAbsenScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="DetailDailyAbsen"
        component={DetailDailyAbsenScreen}
        options={{
          title: 'Detail Absen',
          headerShown: true,
          animationEnabled: false,
        }}
      />
    </Stack.Navigator>
  );
};
