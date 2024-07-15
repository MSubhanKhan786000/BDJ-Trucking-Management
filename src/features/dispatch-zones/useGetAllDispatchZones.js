import { useGetAllService } from "service/useGetAllService";

export const useGetAllDispatchZones = () => {
  const { data, error, loading } = useGetAllService({
    route: "/logistics/dispatch-zones/",
  });

  return { data, error, loading };
};
