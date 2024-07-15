import { useUpdateService } from "service/useUpdateService";

export const useEditLoad = (id) => {
  const { data, sendRequest } = useUpdateService({
    route: `/logistics/loads/${id}/`,
  });

  return { data, sendRequest };
};
