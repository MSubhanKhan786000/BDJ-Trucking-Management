import { useGetAllService } from "service/useGetAllService";

export const useGetAllAssignments = () => {
  const { data, error, loading } = useGetAllService({
    route: "/logistics/assignments/",
  });

  return { data, error, loading };
};
