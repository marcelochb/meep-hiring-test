import { StackNavigationOptions } from '@react-navigation/stack';
import { BottomTabBarOptions } from '@react-navigation/bottom-tabs';

import { colors, fontSize } from '@src/theme';
export const screenOptions: StackNavigationOptions = {
  headerTintColor: colors.text,
  headerBackTitleVisible: false,
  headerTitleAlign: 'center',
  headerStyle: {
    backgroundColor: colors.background,
    shadowOpacity: 0,
  },
  headerTitleStyle: {
    fontWeight: 'bold',
    fontFamily: 'Roboto-Regular',
  },
};

export const bottomTabBarOptions: BottomTabBarOptions = {
  style: {
    height: '10%',
    borderTopWidth: 0,
    flexDirection: 'column',
    backgroundColor: colors.background,
  },
  activeTintColor: colors.textHighlight,
  inactiveTintColor: colors.text,
  tabStyle: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'flex-start',
    flex: 1,
    height: '80%',
    backgroundColor: colors.background,
  },
  labelStyle: {
    fontFamily: 'Roboto-Regular',
    fontSize: fontSize.base,
  },
};
