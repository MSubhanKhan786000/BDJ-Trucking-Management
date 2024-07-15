import { useDeleteService } from "service/useDeleteService";

export const useDeleteTruck = () => {
  const { sendRequestById } = useDeleteService({
    route: `logistics/trucks/`,
  });

  return { sendRequestById };
};
