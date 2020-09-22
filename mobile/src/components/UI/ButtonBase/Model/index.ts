import { GestureResponderEvent, ViewStyle } from 'react-native';

export type ModelOfButtonBase = {
  labelOfButtonBase: string;
  testID?: string;
  onPress:
    | (((event: GestureResponderEvent) => void) &
        ((e: GestureResponderEvent) => void))
    | undefined;
  isLoading?: boolean;
  isDisabled?: boolean;
  isSmall?: boolean;
  isOutline?: boolean;
};

export type ModelOfButtonBaseController = {
  isLoading: boolean;
  isDisabled: boolean;
  isSmall: boolean;
  isOutline: boolean;
};
