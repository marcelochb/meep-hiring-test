import { useState, useEffect } from 'react';
import { format, parseISO } from 'date-fns';
import {
  ModelOfTableFilms,
  ModelOfResponseFilmsApi,
} from '@src/database/Models';
import api from '@src/database/Services/api';
import { ptBR } from 'date-fns/locale';
import { Alert } from 'react-native';

export const useFilmsListFetchDataService = () => {
  const [films, setFilms] = useState<ModelOfTableFilms[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadData = async () => {
      try {
        const response = await api.get<ModelOfResponseFilmsApi>('films');

        const formatedData = response.data.results.map(film => ({
          ...film,
          release_date: format(parseISO(film.release_date), 'dd/MM/yyyy', {
            locale: ptBR,
          }),
        }));
        setFilms(formatedData);
        setLoading(false);
      } catch (err) {
        setLoading(false);
        Alert.alert('Falha na comunicação', err);
      }
    };
    loadData();
  }, []);

  return { films, loading };
};
