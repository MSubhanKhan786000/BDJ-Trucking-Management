import { useUpdateService } from "service/useUpdateService";

export const useEditDriver = (id) => {
  const { data, sendRequest } = useUpdateService({
    route: `/logistics/drivers/${id}/`,
  });

  return { data, sendRequest };
};
