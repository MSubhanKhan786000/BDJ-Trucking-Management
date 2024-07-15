import { useUpdateService } from "service/useUpdateService";

export const useEditUser = (id) => {
  const { data, sendRequest } = useUpdateService({
    route: `/accounts/users/${id}/`,
  });

  return { data, sendRequest };
};
