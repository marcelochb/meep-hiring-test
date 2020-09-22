import { ModelOfUseButtonLinkController } from '../Model';
import { Texts } from '@src/styles';
import { StyleSheet } from 'react-native';
import { metrics } from '@src/theme';

export const useButtonLinkController = ({
  isSecundaryColor,
  styleOfViewButtonLink,
}: ModelOfUseButtonLinkController) => {
  const styleText = isSecundaryColor ? Texts.highlight : Texts.body;

  const styles = StyleSheet.create({
    container: {
      paddingVertical: metrics.base,
    },
  });

  const styleView = styleOfViewButtonLink
    ? [styles.container, styleOfViewButtonLink]
    : styles.container;

  return {
    getController: {
      styleText,
      styleView,
    },
  };
};
