import { useUpdateService } from "service/useUpdateService";

export const useEditDispatch = (id) => {
  const { data, sendRequest } = useUpdateService({
    route: `/accounts/dispatches/${id}/`,
  });

  return { data, sendRequest };
};
