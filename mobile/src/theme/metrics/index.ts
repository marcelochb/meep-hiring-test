import { Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

export const metrics = {
  smallest: 3,
  small: 5,
  base: 10,
  large: 20,
  largest: 40,
  inputHeight: 60,
  inputWidthBase: 200,
  inputWidthLarge: 400,
  buttonHeight: 60,
  buttonBaseSize: 70,
  buttonHeightSmall: 40,
  buttonWidthSmall: 150,
  radiusBase: 8,
  radiusLarge: 20,
  radiusRounded: 50,
  borderWidth: 1,
  screenWidth: width,
  screenHeight: height,
  avatarSize: 70,
};
