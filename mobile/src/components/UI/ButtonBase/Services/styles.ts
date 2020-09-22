import { metrics, colors } from '@src/theme';
import { ViewStyle } from 'react-native';

const center: ViewStyle = {
  justifyContent: 'center',
  alignItems: 'center',
};

const baseSize: ViewStyle = {
  height: metrics.buttonHeight,
  width: '100%',
};

const smallSize: ViewStyle = {
  height: metrics.buttonHeightSmall,
  width: metrics.buttonWidthSmall,
};

const base: ViewStyle = {
  borderRadius: metrics.radiusBase,
  ...center,
};

const shadow: ViewStyle = {
  shadowColor: '#000',
  shadowOffset: { height: 5, width: 5 },
  shadowOpacity: 5,
  shadowRadius: 5,
  elevation: 5,
};

const elementColor: ViewStyle = {
  backgroundColor: colors.elements,
};

const outlineButton: ViewStyle = {
  backgroundColor: 'transparent',
  borderStyle: 'solid',
  borderWidth: metrics.borderWidth,
};

const borderElement: ViewStyle = {
  borderColor: colors.elements,
};

export const primary = {
  ...base,
  ...baseSize,
  ...elementColor,
  ...shadow,
};

export const primarySmall = {
  ...primary,
  ...smallSize,
};

export const primaryOutlined = {
  ...base,
  ...baseSize,
  ...outlineButton,
  ...borderElement,
};

export const primaryOutlinedSmall = {
  ...primaryOutlined,
  ...smallSize,
};
