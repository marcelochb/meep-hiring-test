import { useState, useEffect } from 'react';
import { ModelOfTableStarships } from '@src/database/Models';
import api from '@src/database/Services/api';

export const useStarShipsFetchDataService = (starShipsUrl: string[]) => {
  const [starShips, setStarShips] = useState<ModelOfTableStarships[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadData = async () => {
      try {
        const promisses = starShipsUrl.map(async starship => {
          const response = await api.get<ModelOfTableStarships>(
            starship.slice(20),
          );
          setStarShips(preData => preData.concat(response.data));
        });
        await Promise.all(promisses);
        setLoading(false);
      } catch (error) {
        setLoading(false);
      }
    };
    loadData();
  }, []);

  return { starShips, loading };
};
