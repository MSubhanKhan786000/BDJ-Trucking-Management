import { useCallback } from "react";
import { usePostService } from "service/usePostService";

export const useCreateTruckDocuments = (id) => {
  const { data, sendRequest } = usePostService({
    route: `/logistics/trucks/${id}/documents/`,
  });

  const sendRequestById = useCallback(
    (id, data) =>
      sendRequest({
        url: `/logistics/trucks/${id}/documents/`,
        data,
      }),
    [sendRequest],
  );
  return { data, sendRequestById };
};
