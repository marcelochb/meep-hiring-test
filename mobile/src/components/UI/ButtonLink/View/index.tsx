import React from 'react';
import { Text } from 'react-native';
import { TouchableRipple } from 'react-native-paper';
import { ModelOfButtonLink } from '../Model';
import { useButtonLinkController } from '../Controller';

export const ButtonLink: React.FC<ModelOfButtonLink> = ({
  labelOfButtonLink,
  onHandleButtonLink,
  isSecundaryColor = false,
  style,
  IconSVG,
}) => {
  const { getController } = useButtonLinkController({ isSecundaryColor, styleOfViewButtonLink: style })

  return (
    <TouchableRipple
      testID={labelOfButtonLink}
      onPress={onHandleButtonLink}
      style={getController.styleView}
    >
      <React.Fragment>
        {IconSVG && (<IconSVG />)}
        {labelOfButtonLink && <Text style={getController.styleText}>{labelOfButtonLink}</Text>}
      </React.Fragment>
    </TouchableRipple>
  );
}


