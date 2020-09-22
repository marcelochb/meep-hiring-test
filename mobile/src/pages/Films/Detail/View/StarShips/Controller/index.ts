import { useStarShipsFetchDataService } from '../Services/fetchData';

export const useStarShipsController = (starShipsUrl: string[]) => {
  const { starShips, loading } = useStarShipsFetchDataService(starShipsUrl);

  return {
    getController: { starShips, loading },
  };
};
