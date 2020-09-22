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
          console.tron.log('url', character.slice(20));
          const response = await api.get<ModelOfTableCharacters>(
            character.slice(20),
          );
          console.tron.log('responseCharacter', response);
          setCharacters(preData => preData.concat(response.data));
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

  return { characters, loading };
};
