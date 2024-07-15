import { useAxios } from "./useAxios";
import { BACKEND_BASE_URL } from "./global";
import { useCallback } from "react";

export const useUpdateService = (props) => {
  const { route, config, params, options = { manual: true } } = props;
  const [{ loading, error, data, response }, sendRequest] = useAxios(
    {
      baseURL: BACKEND_BASE_URL,
      url: route,
      method: "PUT",
      params,
      ...config,
    },
    {
      ...options,
    }
  );

  const sendRequestById = useCallback(
    (id, body) =>
      sendRequest({
        url: `${route}${id ? `${id}/` : ""}`,
        data: body,
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
