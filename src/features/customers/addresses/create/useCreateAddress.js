import { usePostService } from "service/usePostService";

export const useCreateAddress = () => {
  const { data, sendRequest } = usePostService({
    route: "/generic/addresses/",
  });

  return { data, sendRequest };
};
