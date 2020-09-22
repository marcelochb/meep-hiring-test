import { useCharactersFetchDataService } from '../Services/fetchData';

export const useCharactersController = (charactersUrl: string[]) => {
  const { characters, loading } = useCharactersFetchDataService(charactersUrl);

  return {
    getController: { characters, loading },
  };
};
