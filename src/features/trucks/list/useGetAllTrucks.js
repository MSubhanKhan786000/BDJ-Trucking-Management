import { useGetAllService } from "../../../service/useGetAllService";

export const useGetAllTrucks = () => {
  const { data, error, loading, sendRequest } = useGetAllService({
    route: "/logistics/trucks/",
  });

  return { data, error, loading, sendRequest };
};
