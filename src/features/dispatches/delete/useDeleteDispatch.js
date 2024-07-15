import { useDeleteService } from "service/useDeleteService";

export const useDeleteDispatch = () => {
  const { sendRequestById } = useDeleteService({
    route: `logistics/dispatches/`,
  });

  return { sendRequestById };
};
