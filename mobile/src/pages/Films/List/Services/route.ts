import { useNavigation } from '@react-navigation/native';
import { ModelOfTableFilms } from '@src/database/Models';

export const useFilmsListRouteService = () => {
  const navigation = useNavigation();

  const navigateToFilmsDetail = (film: ModelOfTableFilms) =>
    navigation.navigate('FilmsDetail', { film });

  return { navigateToFilmsDetail };
};
