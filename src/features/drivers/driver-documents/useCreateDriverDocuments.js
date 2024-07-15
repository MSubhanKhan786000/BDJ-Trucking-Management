import { useCallback } from "react";
import { usePostService } from "service/usePostService";

export const useCreateDriverDocuments = (id) => {
  const { data, sendRequest } = usePostService({
    route: `/logistics/drivers/${id}/documents/`,
  });

  const sendRequestById = useCallback(
    (id, data) =>
      sendRequest({
        url: `/logistics/drivers/${id}/documents/`,
        data,
      }),
    [sendRequest],
  );
  return { data, sendRequestById };
};
