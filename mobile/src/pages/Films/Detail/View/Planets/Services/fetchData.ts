import { useState, useEffect } from 'react';
import { ModelOfTablePlanets } from '@src/database/Models';
import api from '@src/database/Services/api';
import { Alert } from 'react-native';

export const usePlanetsFetchDataService = (planetsUrl: string[]) => {
  const [planets, setPlanets] = useState<ModelOfTablePlanets[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadData = async () => {
      try {
        const promisses = planetsUrl.map(async planet => {
          console.tron.log('url', planet.slice(20));
          const response = await api.get<ModelOfTablePlanets>(planet.slice(20));
          console.tron.log('responseCharacter', response);
          setPlanets(preData => preData.concat(response.data));
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

  return { planets, loading };
};
