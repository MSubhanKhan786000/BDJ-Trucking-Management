import { useGetService } from "service/useGetService";

export const useGetDriver = (resourceId) => {
  const { data, error, loading, sendRequestById } = useGetService({
    route: "/logistics/drivers",
    resourceId,
  });
  return { driver: data?.data, error, loading, sendRequestById };
};
