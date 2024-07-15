import { useDeleteService } from "service/useDeleteService";

export const useDeleteUser = () => {
  const { sendRequestById } = useDeleteService({
    route: `accounts/users/`,
  });

  return { sendRequestById };
};
