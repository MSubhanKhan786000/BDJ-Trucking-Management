import { useDeleteService } from "service/useDeleteService";

export const useDeleteDriver = () => {
  const { sendRequestById } = useDeleteService({
    route: `logistics/drivers/`,
  });

  return { sendRequestById };
};
