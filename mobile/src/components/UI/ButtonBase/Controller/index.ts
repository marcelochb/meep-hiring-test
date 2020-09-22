import { ModelOfButtonBaseController } from '../Model';
import * as Styles from '../Services/styles';

export const useButtonBaseController = ({
  isDisabled,
  isLoading,
  isOutline,
  isSmall,
}: ModelOfButtonBaseController) => {
  const disabled = isLoading || isDisabled;

  const style = isOutline
    ? isSmall
      ? Styles.primaryOutlinedSmall
      : Styles.primaryOutlined
    : isSmall
    ? Styles.primarySmall
    : Styles.primary;

  return {
    getController: {
      disabled,
      style,
    },
  };
};
