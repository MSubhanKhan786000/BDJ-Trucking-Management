import { useGetService } from "service/useGetService";

export const useGetTruck = (resourceId) => {
  const { data, error, loading, sendRequestById } = useGetService({
    route: "/logistics/trucks",
    resourceId,
  });
  return { truck: data?.data, error, loading, sendRequestById };
};
