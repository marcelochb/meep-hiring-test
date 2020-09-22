import React from 'react';
import { ActivityIndicator, Text } from 'react-native';
import { ModelOfTextButton } from '../Model';
import { colors } from '@src/theme';
import { Texts } from '@src/styles';

export const TextButton: React.FC<ModelOfTextButton> = ({ isLoading, children, isOutline }) => {
  const style = isOutline
    ? Texts.highlight
    : Texts.element
  return (
    isLoading
      ? (

        <ActivityIndicator color={colors.textElements} />
      )
      : (
        <Text style={style}>{children}</Text>

      )
  );
}

