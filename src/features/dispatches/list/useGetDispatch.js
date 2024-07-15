import { useGetService } from "service/useGetService";

export const useGetDispatch = (resourceId) => {
  const { data, error, loading, sendRequestById } = useGetService({
    route: "/logistics/dispatches",
    resourceId,
  });
  return { dispatch: data?.data, error, loading, sendRequestById };
};
