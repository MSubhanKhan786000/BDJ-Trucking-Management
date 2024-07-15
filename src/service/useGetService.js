import { useCallback } from "react";
import { useAxios } from "./useAxios";
import { BACKEND_BASE_URL } from "./global";

export const useGetService = (props) => {
  const { route, resourceId, config, options, params } = props;
  const [{ error, loading, data, response }, sendRequest] = useAxios(
    {
      baseURL: BACKEND_BASE_URL,
      url: resourceId ? `${route}/${resourceId}` : route,
      method: "GET",
      params,
      ...config,
    },
    {
      ...options,
    }
  );

  const sendRequestById = useCallback(
    (id) =>
      sendRequest({
        url: `${route}${id ? `${id}` : ""}`,
      }),
    [sendRequest, route]
  );

  return { error, loading, data, response, sendRequestById };
};
