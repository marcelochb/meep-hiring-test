import { ViewStyle } from 'react-native';

export type ModelOfButtonLink = {
  labelOfButtonLink?: string;
  onHandleButtonLink: () => void;
  isSecundaryColor?: boolean;
  style?: ViewStyle;
  IconSVG?: React.FC<React.SVGProps<SVGSVGElement>>;
};

export type ModelOfUseButtonLinkController = {
  isSecundaryColor: boolean;
  styleOfViewButtonLink?: ViewStyle;
};
