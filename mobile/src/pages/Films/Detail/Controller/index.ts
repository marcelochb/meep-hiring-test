import { useRoute } from '@react-navigation/native';
import { ModelOfFilmsDetailPageParameters } from '../Models';

export const useFilmsDetailController = () => {
  const route = useRoute<ModelOfFilmsDetailPageParameters>();
  console.tron.log(route);

  return {
    getController: { film: route.params.film },
  };
};
