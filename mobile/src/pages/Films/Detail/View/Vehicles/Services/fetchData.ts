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
          const response = await api.get<ModelOfTableVehicles>(
            vehicle.slice(20),
          );
          setVehicles(preData => preData.concat(response.data));
        });
        await Promise.all(promisses);
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
