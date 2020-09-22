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
          const response = await api.get<ModelOfTablePlanets>(planet.slice(20));
          setPlanets(preData => preData.concat(response.data));
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

  return { planets, loading };
};
