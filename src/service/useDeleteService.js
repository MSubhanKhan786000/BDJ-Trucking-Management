import { useCallback } from "react";
import { useAxios } from "./useAxios";
import { BACKEND_BASE_URL } from "./global";

export const useDeleteService = (props) => {
  const { route, config, params, options = { manual: true } } = props;
  const [{ loading, error, data, response }, sendRequest] = useAxios(
    {
      baseURL: BACKEND_BASE_URL,
      url: route,
      method: "DELETE",
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

  return {
    error,
    loading,
    data: data || null,
    response,
    sendRequest,
    sendRequestById,
  };
};
