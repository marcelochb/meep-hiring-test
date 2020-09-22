import { ModelOfTableFilms } from '@src/database/Models';
import { RouteProp } from '@react-navigation/native';

type ModelOfNavigateParameters = {
  params: {
    film: ModelOfTableFilms;
  };
};

export type ModelOfFilmsDetailPageParameters = RouteProp<
  ModelOfNavigateParameters,
  'params'
>;
