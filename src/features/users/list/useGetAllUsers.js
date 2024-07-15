import { useGetAllService } from "../../../service/useGetAllService";

export const useGetAllUsers = () => {
  const { data, error, loading } = useGetAllService({
    route: "/accounts/users/",
  });

  return { data, error, loading };
};
