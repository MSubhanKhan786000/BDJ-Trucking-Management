import { useGetAllService } from "service/useGetAllService";

export const useGetAllTruckDocuments = (id, manual = false) => {
  const { data, error, loading, sendRequest } = useGetAllService({
    route: `/logistics/trucks/${id}/documents/`,
    options: {
      manual,
    },
  });

  return { data, error, loading, sendRequest };
};
