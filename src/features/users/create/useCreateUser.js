import { usePostService } from "service/usePostService";

export const useCreateUser = () => {
  const { data, sendRequest } = usePostService({
    route: "/accounts/users/create/",
  });

  return { data, sendRequest };
};
