import { usePostService } from "service/usePostService";

export const useCreateCustomer = () => {
  const { data, sendRequest } = usePostService({
    route: "/accounts/customers/",
  });

  return { data, sendRequest };
};
export const useCreateAddress = () => {
  const { data, sendRequest } = usePostService({
    route: "/generic/addresses/",
  });

  return { data, sendRequest };
};
