import { ModelOfTableFilms } from '@src/database/Models';

export type ModelOfFilmsListCard = {
  film: ModelOfTableFilms;
  handleButton: () => void;
};
