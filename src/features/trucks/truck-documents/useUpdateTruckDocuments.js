import { useCallback } from "react";
import { useUpdateService } from "service/useUpdateService";

export const useUpdateTruckDocuments = (truckId, documentId) => {
  const { data, sendRequest } = useUpdateService({
    route: `/logistics/trucks/${truckId}/documents/${documentId}/`,
  });

  const sendRequestById = useCallback(
    (truckId, documentId, data) =>
      sendRequest({
        url: `/logistics/trucks/${truckId}/documents/${documentId}/`,
        data,
      }),
    [sendRequest]
  );
  return { data, sendRequestById };
};
