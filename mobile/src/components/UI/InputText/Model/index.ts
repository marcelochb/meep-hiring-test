import { ChangeEvent } from 'react';
import { KeyboardType } from 'react-native';
import { RenderProps } from 'react-native-paper/lib/typescript/src/components/TextInput/types';
export type ModelOfSigninInputText = {
  labelOfInputText: string;
  onChangeText: (e: string | ChangeEvent<any>) => void;
  valueOfInputText?: string;
  hasError?: boolean;
  errorText?: string;
  isPasswordInputText?: boolean;
  isMultline?: boolean;
  keyboardType?: KeyboardType;
  autoCapitalize?: 'none' | 'sentences' | 'words' | 'characters' | undefined;
  maxLength?: number;
  autoFocus?: boolean;
  render?: ((props: RenderProps) => React.ReactNode) | undefined;
};

export type ModelOfUseInputTextController = {
  hasError: boolean;
  errorText: string;
};
