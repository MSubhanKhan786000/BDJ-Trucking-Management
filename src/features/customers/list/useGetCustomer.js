import { useGetService } from "service/useGetService";

export const useGetCustomer = (resourceId) => {
  const { data, error, loading, sendRequestById } = useGetService({
    route: "/accounts/customers",
    resourceId,
  });
  return { customer: data?.data, error, loading, sendRequestById };
};
