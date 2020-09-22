import { colors, metrics } from '@src/theme';
import { TextStyle } from 'react-native';

const baseStyle: TextStyle = {
  flex: 1,
  marginBottom: metrics.base,
};

const fonts = {
  regular: {
    fontFamily: 'Roboto-Regular',
  },
};

export const themeElementBaseColor = {
  colors: {
    primary: colors.elements,
    error: colors.textHighlight,
    text: colors.text,
    background: colors.background,
    placeholder: colors.text,
  },
  fonts,
};

export const elementBaseColor: TextStyle = {
  ...baseStyle,
  backgroundColor: colors.background,
};
