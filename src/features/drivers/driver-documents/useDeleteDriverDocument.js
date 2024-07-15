import { useDeleteService } from "service/useDeleteService";

export const useDeleteDriverDocument = (id) => {
  const { sendRequestById } = useDeleteService({
    route: `/logistics/drivers/${id}/documents/`,
  });

  return { sendRequestById };
};
