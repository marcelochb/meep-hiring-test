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
          console.tron.log('url', starship.slice(20));
          const response = await api.get<ModelOfTableStarships>(
            starship.slice(20),
          );
          console.tron.log('responseCharacter', response);
          setStarShips(preData => preData.concat(response.data));
        });
        const result = await Promise.all(promisses);
        console.tron.log('resultPromisse', result);
        setLoading(false);
      } catch (error) {
        setLoading(false);
        console.tron.log('responseErrorCharacter', error);
      }
    };
    loadData();
  }, []);

  return { starShips, loading };
};
