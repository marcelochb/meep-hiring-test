import { useState, useEffect } from 'react';
import { ModelOfTableSpecies } from '@src/database/Models';
import api from '@src/database/Services/api';
import { Alert } from 'react-native';

export const useSpeciesFetchDataService = (speciesUrl: string[]) => {
  const [species, setSpecies] = useState<ModelOfTableSpecies[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadData = async () => {
      try {
        const promisses = speciesUrl.map(async specie => {
          console.tron.log('url', specie.slice(20));
          const response = await api.get<ModelOfTableSpecies>(specie.slice(20));
          console.tron.log('responseCharacter', response);
          setSpecies(preData => preData.concat(response.data));
        });
        const result = await Promise.all(promisses);
        console.tron.log('resultPromisse', result);
        setLoading(false);
      } catch (error) {
        setLoading(false);
        Alert.alert('Falha na comunicação', error);
      }
    };
    loadData();
  }, []);

  return { species, loading };
};
