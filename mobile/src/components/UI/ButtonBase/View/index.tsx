import React from 'react';
import { TouchableRipple } from 'react-native-paper';
import { ModelOfButtonBase } from '../Model';
import { TextButton } from './Text/View';
import { useButtonBaseController } from '../Controller';


export const ButtonBase: React.FC<ModelOfButtonBase> = ({
  labelOfButtonBase,
  onPress,
  isLoading = false,
  isDisabled = false,
  isSmall = false,
  isOutline = false,
  testID,
}) => {
  const { getController } = useButtonBaseController({ isDisabled, isLoading, isOutline, isSmall });
  return (
    <TouchableRipple
      testID={testID}
      style={getController.style}
      onPress={onPress}
      disabled={getController.disabled}
    >
      <TextButton
        isOutline={isOutline}
        isLoading={isLoading}>
        {labelOfButtonBase}
      </TextButton>
    </TouchableRipple>
  );
}
