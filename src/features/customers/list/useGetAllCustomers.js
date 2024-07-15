import { useGetAllService } from "../../../service/useGetAllService";

export const useGetAllCustomers = () => {
  const { data, error, loading } = useGetAllService({
    route: "/accounts/customers/",
  });

  return { data, error, loading };
};
