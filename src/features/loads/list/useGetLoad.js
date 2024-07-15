import { useGetService } from "service/useGetService";

export const useGetLoad = (resourceId) => {
  const { data, error, loading, sendRequestById } = useGetService({
    route: "/logistics/loads",
    resourceId,
  });

  return { load: data?.data, error, loading, sendRequestById };
};
