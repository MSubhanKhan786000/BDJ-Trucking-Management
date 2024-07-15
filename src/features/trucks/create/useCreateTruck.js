import { usePostService } from "service/usePostService";

export const useCreateTruck = () => {
  const { data, sendRequest } = usePostService({
    route: "/logistics/trucks/",
  });

  return { data, sendRequest };
};
