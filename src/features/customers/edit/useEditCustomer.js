import { useUpdateService } from "service/useUpdateService";

export const useEditCustomer = (id) => {
  const { data, sendRequest } = useUpdateService({
    route: `/accounts/customers/${id}/`,
  });

  return { data, sendRequest };
};

export const useUpdateAddress = () => {
  const { data, sendRequestById } = useUpdateService({
    route: "/generic/addresses/",
    config: {
      method: "PATCH",
    },
  });

  return { data, sendRequestById };
};
