import { useRoute } from '@react-navigation/native';
import { ModelOfFilmsDetailPageParameters } from '../Models';

export const useFilmsDetailController = () => {
  const route = useRoute<ModelOfFilmsDetailPageParameters>();

  return {
    getController: { film: route.params.film },
  };
};
