import { useGetAllService } from "service/useGetAllService";

export const useGetAllAddresses = () => {
  const { data, error, loading } = useGetAllService({
    route: "/generic/addresses/",
  });

  return { data, error, loading };
};
