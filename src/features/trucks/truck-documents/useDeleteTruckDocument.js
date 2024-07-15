import { useDeleteService } from "service/useDeleteService";

export const useDeleteTruckDocument = (id) => {
  const { sendRequestById } = useDeleteService({
    route: `/logistics/trucks/${id}/documents/`,
  });

  return { sendRequestById };
};
