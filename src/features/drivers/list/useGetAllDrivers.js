import { useGetAllService } from "../../../service/useGetAllService";

export const useGetAllDrivers = () => {
  const { data, error, loading, sendRequest } = useGetAllService({
    route: "/logistics/drivers/",
  });

  return { data, error, loading, sendRequest };
};
