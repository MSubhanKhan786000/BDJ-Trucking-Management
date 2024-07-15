import { useAxios } from "./useAxios";
import { BACKEND_BASE_URL } from "./global";

export const useGetAllService = (props) => {
  const { route, config, options, params } = props;
  const [{ error, loading, data }, sendRequest] = useAxios(
    {
      baseURL: BACKEND_BASE_URL,
      url: route,
      method: "GET",
      params,
      ...config,
    },
    {
      ...options,
    }
  );

  return { error, loading, data: data?.data?.results, sendRequest };
};
