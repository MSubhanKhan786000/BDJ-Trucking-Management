import { usePostService } from "service/usePostService";

export const useCreateDriver = () => {
  const { data, sendRequest } = usePostService({
    route: "/logistics/drivers/",
  });

  return { data, sendRequest };
};
