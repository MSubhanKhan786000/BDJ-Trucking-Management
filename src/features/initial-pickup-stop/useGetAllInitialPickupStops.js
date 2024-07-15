import { useGetAllService } from "service/useGetAllService";

export const useGetAllInitialPickupStops = () => {
  const { data, error, loading } = useGetAllService({
    route: "/stops/initial-pickup-stops/",
  });

  return { data, error, loading };
};
