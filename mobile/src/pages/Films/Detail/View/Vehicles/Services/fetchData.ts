import { useState, useEffect } from 'react';
import { ModelOfTableVehicles } from '@src/database/Models';
import api from '@src/database/Services/api';
import { Alert } from 'react-native';

export const useVehiclesFetchDataService = (vehiclesUrl: string[]) => {
  const [vehicles, setVehicles] = useState<ModelOfTableVehicles[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadData = async () => {
      try {
        const promisses = vehiclesUrl.map(async vehicle => {
          console.tron.log('url', vehicle.slice(20));
          const response = await api.get<ModelOfTableVehicles>(
            vehicle.slice(20),
          );
          console.tron.log('responseCharacter', response);
          setVehicles(preData => preData.concat(response.data));
        });
        const result = await Promise.all(promisses);
        console.tron.log('resultPromisse', result);
        setLoading(false);
      } catch (error) {
        setLoading(false);
        Alert.alert('Falha de comunicação', error);
      }
    };
    loadData();
  }, []);

  return { vehicles, loading };
};
