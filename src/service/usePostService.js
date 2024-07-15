import { useAxios } from "./useAxios";
import { BACKEND_BASE_URL } from "./global";

export const usePostService = (props) => {
  const { route, config, params, options = { manual: true } } = props;
  const [{ loading, error, data, response }, sendRequest] = useAxios(
    {
      baseURL: BACKEND_BASE_URL,
      url: route,
      method: "POST",
      params,
      ...config,
    },
    {
      ...options,
    }
  );

  return { error, loading, data: data || null, response, sendRequest };
};
