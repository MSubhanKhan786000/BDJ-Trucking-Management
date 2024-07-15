import { useDeleteService } from "service/useDeleteService";

export const useDeleteLoad = () => {
  const { sendRequestById } = useDeleteService({
    route: `logistics/loads/`,
  });

  return { sendRequestById };
};
