import { usePostService } from "service/usePostService";

export const useCreateDispatch = () => {
  const { data, sendRequest } = usePostService({
    route: "/logistics/dispatches/",
  });

  return { data, sendRequest };
};
