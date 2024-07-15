import { useCallback } from "react";
import { useUpdateService } from "service/useUpdateService";

export const useUpdateDriverDocuments = (driverId, documentId) => {
  const { data, sendRequest } = useUpdateService({
    route: `/logistics/drivers/${driverId}/documents/${documentId}/`,
  });

  const sendRequestById = useCallback(
    (driverId, documentId, data) =>
      sendRequest({
        url: `/logistics/drivers/${driverId}/documents/${documentId}/`,
        data,
      }),
    [sendRequest]
  );
  return { data, sendRequestById };
};
