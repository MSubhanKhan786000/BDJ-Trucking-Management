import { useGetAllService } from "service/useGetAllService";

export const useGetAllDriverDocuments = (id, manual = false) => {
  const { data, error, loading, sendRequest } = useGetAllService({
    route: `/logistics/drivers/${id}/documents/`,
    options: {
      manual,
    },
  });

  return { data, error, loading, sendRequest };
};
