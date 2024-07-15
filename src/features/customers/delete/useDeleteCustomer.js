import { useDeleteService } from "service/useDeleteService";

export const useDeleteCustomer = () => {
  const { sendRequestById } = useDeleteService({
    route: `accounts/customers/`,
  });

  return { sendRequestById };
};
