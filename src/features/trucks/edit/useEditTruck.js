import { useUpdateService } from "service/useUpdateService";

export const useEditTruck = (id) => {
  const { data, sendRequest } = useUpdateService({
    route: `/logistics/trucks/${id}/`,
  });

  return { data, sendRequest };
};
