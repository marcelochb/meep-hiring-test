import * as Styles from '../Services/styles';
import { ModelOfUseInputTextController } from '../Model';
export const useInputTextController = ({
  errorText,
  hasError,
}: ModelOfUseInputTextController) => {
  const hasValidationError = !!(hasError && errorText);

  return {
    getController: {
      Styles,
      hasValidationError,
    },
  };
};
