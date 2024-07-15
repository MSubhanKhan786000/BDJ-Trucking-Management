import { usePostService } from "service/usePostService";

export const useCreateLoad = () => {
  const { data, sendRequest } = usePostService({
    route: "/logistics/loads/",
  });

  return { data, sendRequest };
};
