import { useGetAllService } from "service/useGetAllService";

export const useGetAllLoads = () => {
  const { data, error, loading, sendRequest } = useGetAllService({
    route: "/logistics/loads/",
  });

  return { data, error, loading, sendRequest };
};
