import { useSpeciesFetchDataService } from '../Services/fetchData';

export const useSpeciesController = (speciesUrl: string[]) => {
  const { species, loading } = useSpeciesFetchDataService(speciesUrl);

  return {
    getController: { species, loading },
  };
};
