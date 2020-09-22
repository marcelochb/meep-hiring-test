import { ViewStyle } from 'react-native';
import { colors, metrics } from '@src/theme';

export const content: ViewStyle = {
  width: metrics.screenWidth / 1.09,
};

export const container: ViewStyle = {
  flex: 1,
  backgroundColor: colors.background,
};
