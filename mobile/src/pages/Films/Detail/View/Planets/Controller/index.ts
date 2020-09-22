import { usePlanetsFetchDataService } from '../Services/fetchData';

export const useCharactersController = (charactersUrl: string[]) => {
  const { planets, loading } = usePlanetsFetchDataService(charactersUrl);

  return {
    getController: { planets, loading },
  };
};
