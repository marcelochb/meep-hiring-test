import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { TextInput } from 'react-native-paper';
import { Texts } from '@src/styles';
import { ModelOfSigninInputText } from '../Model';
import { useInputTextController } from '../Controller';


export const InputText: React.FC<ModelOfSigninInputText> = ({
  labelOfInputText,
  onChangeText,
  valueOfInputText,
  hasError = false,
  errorText = '',
  isPasswordInputText = false,
  isMultline = false,
  keyboardType = 'default',
  autoFocus = false,
  autoCapitalize,
  maxLength,
  render,
  ...rest
}) => {
  const { getController } = useInputTextController({ errorText, hasError });

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <TextInput
          testID={labelOfInputText}
          theme={getController.Styles.themeElementBaseColor}
          style={getController.Styles.elementBaseColor}
          label={labelOfInputText}
          onChangeText={onChangeText}
          value={valueOfInputText}
          error={getController.hasValidationError}
          secureTextEntry={isPasswordInputText}
          keyboardType={keyboardType}
          mode='outlined'
          autoCapitalize={autoCapitalize}
          multiline={isMultline}
          maxLength={maxLength}
          selectTextOnFocus
          autoFocus={autoFocus}
          render={render}
          {...rest}
        />
      </View>
      {getController.hasValidationError && (
        <Text style={styles.errorText}>{errorText}</Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'flex-end',
  },
  content: {
    flexDirection: 'row',
    width: '100%',

  },
  errorText: {
    ...Texts.highlight,
    marginTop: -10
  }
})
