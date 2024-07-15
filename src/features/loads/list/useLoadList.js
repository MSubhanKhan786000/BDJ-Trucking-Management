import { useCallback, useState } from "react";
import { useGetAllLoads } from "./useGetAllLoads";
import { useDeleteLoad } from "../delete/useDeleteLoad";

export const useLoadList = () => {
  const { loading, data: loads, sendRequest } = useGetAllLoads();
  const [selectedLoadId, setSelectedLoadId] = useState("");

  const [isConfirmationModalOpen, setIsConfirmationModalOpen] = useState(false);
  const toggleConfirmationModal = () =>
    setIsConfirmationModalOpen(!isConfirmationModalOpen);

  const { sendRequestById } = useDeleteLoad();

  const deleteLoad = useCallback(async () => {
    await sendRequestById(selectedLoadId);
    await sendRequest();
  }, [selectedLoadId, sendRequest, sendRequestById]);

  const serializedData = loads?.map((load) => ({
    ...load,
    customer: load?.customer?.name,
  }));

  return {
    data: serializedData,
    loading,
    toggleConfirmationModal,
    isConfirmationModalOpen,
    selectedLoadId,
    setSelectedLoadId,
    deleteLoad,
  };
};
