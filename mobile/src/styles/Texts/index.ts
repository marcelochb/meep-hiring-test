import { colors, fontSize } from '@src/theme';
import { TextStyle } from 'react-native';

export const body: TextStyle = {
  fontFamily: 'Roboto-Regular',
  fontSize: fontSize.base,
  color: colors.text,
};
export const title: TextStyle = {
  fontFamily: 'Roboto-Regular',
  fontSize: fontSize.largest,
  color: colors.text,
};
export const subTitle: TextStyle = {
  fontFamily: 'Roboto-Regular',
  fontSize: fontSize.smallest,
  color: colors.textHighlight,
};
export const element: TextStyle = {
  fontFamily: 'Roboto-Regular',
  fontSize: fontSize.base,
  color: colors.textElements,
};
export const highlight: TextStyle = {
  fontFamily: 'Roboto-Regular',
  fontSize: fontSize.base,
  color: colors.textHighlight,
};
