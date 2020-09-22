import { useState, useEffect } from 'react';
import { ModelOfTableCharacters } from '@src/database/Models';
import api from '@src/database/Services/api';
import { Alert } from 'react-native';

export const useCharactersFetchDataService = (charactersUrl: string[]) => {
  const [characters, setCharacters] = useState<ModelOfTableCharacters[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadData = async () => {
      try {
        const promisses = charactersUrl.map(async character => {
          const response = await api.get<ModelOfTableCharacters>(
            character.slice(20),
          );
          setCharacters(preData => preData.concat(response.data));
        });
        await Promise.all(promisses);
        setLoading(false);
      } catch (error) {
        setLoading(false);
        Alert.alert('Falha na comunicação', error);
      }
    };
    loadData();
  }, []);

  return { characters, loading };
};
