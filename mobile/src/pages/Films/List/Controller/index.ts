import { useFilmsListFetchDataService } from '../Services/fetchData';
import { useFilmsListRouteService } from '../Services/route';

export const useFilmsListController = () => {
  const { films, loading } = useFilmsListFetchDataService();
  const { navigateToFilmsDetail } = useFilmsListRouteService();

  return {
    getController: { films, loading },
    handleController: { navigateToFilmsDetail },
  };
};
