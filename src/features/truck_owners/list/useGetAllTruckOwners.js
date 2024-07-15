import { useGetAllService } from "../../../service/useGetAllService";

export const useGetAllTruckOwners = () => {
  const { data, error, loading } = useGetAllService({
    route: "/logistics/truck_owners/",
  });

  return { data, error, loading };
};
