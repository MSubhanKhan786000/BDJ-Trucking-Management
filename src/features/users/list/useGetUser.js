import { useGetService } from "service/useGetService";

export const useGetUser = (resourceId) => {
  const { data, error, loading, sendRequestById } = useGetService({
    route: "/accounts/users",
    resourceId,
  });
  return { user: data?.data, error, loading, sendRequestById };
};
