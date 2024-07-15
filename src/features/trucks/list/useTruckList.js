import { useCallback, useState } from "react";
import { useGetAllTrucks } from "./useGetAllTrucks";
import { useDeleteTruck } from "../delete/useDeleteTruck";
import { useGetTruckMetaData } from "../metadata/useGetTruckMetaData";

export const useTruckList = () => {
  const { loading, data: trucks, sendRequest } = useGetAllTrucks();
  const [selectedTruckId, setSelectedTruckId] = useState("");

  const [isConfirmationModalOpen, setIsConfirmationModalOpen] = useState(false);
  const toggleConfirmationModal = () =>
    setIsConfirmationModalOpen(!isConfirmationModalOpen);

  const [isEntityModalOpen, setIsEntitynModalOpen] = useState(false);
  const toggleEntityModal = () => setIsEntitynModalOpen(!isEntityModalOpen);

  const { sendRequestById } = useDeleteTruck();

  const deleteTruck = useCallback(async () => {
    await sendRequestById(selectedTruckId);
    await sendRequest();
  }, [selectedTruckId, sendRequest, sendRequestById]);

  const serializedData = trucks?.map((truck) => ({
    ...truck,
  }));

  const { truckFormFields } = useGetTruckMetaData();

  return {
    data: serializedData,
    loading,
    toggleConfirmationModal,
    isConfirmationModalOpen,
    selectedTruckId,
    setSelectedTruckId,
    deleteTruck,
    truckFormFields,
    isEntityModalOpen,
    setIsEntitynModalOpen,
    toggleEntityModal,
  };
};
