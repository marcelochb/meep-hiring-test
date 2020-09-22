import { useVehiclesFetchDataService } from '../Services/fetchData';

export const useVehiclesController = (vehiclesUrl: string[]) => {
  const { vehicles, loading } = useVehiclesFetchDataService(vehiclesUrl);

  return {
    getController: { vehicles, loading },
  };
};
