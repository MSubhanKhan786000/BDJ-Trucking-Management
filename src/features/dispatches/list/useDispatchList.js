import { useCallback, useState } from "react";
import { useGetAllDispatches } from "./useGetAllDispatches";
import { useDeleteDispatch } from "../delete/useDeleteDispatch";

export const useDispatchList = () => {
  const { loading, data: dispatches, sendRequest } = useGetAllDispatches();
  const [selectedDispatchId, setSelectedDispatchId] = useState("");

  const [isConfirmationModalOpen, setIsConfirmationModalOpen] = useState(false);
  const toggleConfirmationModal = () =>
    setIsConfirmationModalOpen(!isConfirmationModalOpen);

  const { sendRequestById } = useDeleteDispatch();

  const deleteDispatch = useCallback(async () => {
    await sendRequestById(selectedDispatchId);
    await sendRequest();
  }, [selectedDispatchId, sendRequest, sendRequestById]);

  const serializedData = dispatches?.map((dispatch) => ({
    ...dispatch,
    driver1: dispatch?.driver1?.display_name,
    driver2: dispatch?.driver2?.display_name,
    truck: dispatch?.truck?.plates_number,
    load_status: dispatch?.load?.status,
  }));

  return {
    data: serializedData,
    loading,
    toggleConfirmationModal,
    isConfirmationModalOpen,
    selectedDispatchId,
    setSelectedDispatchId,
    deleteDispatch,
  };
};
