import { useGetAllService } from "../../../service/useGetAllService";

export const useGetAllDispatches = () => {
  const { data, error, loading } = useGetAllService({
    route: "/logistics/dispatches/",
  });

  return { data, error, loading };
};
