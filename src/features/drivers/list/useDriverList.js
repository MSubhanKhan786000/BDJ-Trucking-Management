import { useCallback, useState } from "react";
import { useGetAllDrivers } from "./useGetAllDrivers";
import { useDeleteDriver } from "../delete/useDeleteDriver";
import { useGetDriverMetaData } from "../metadata/useGetDriverMetaData";

export const useDriverList = () => {
  const { loading, data: drivers, sendRequest } = useGetAllDrivers();
  const [selectedDriverId, setSelectedDriverId] = useState("");

  const [isConfirmationModalOpen, setIsConfirmationModalOpen] = useState(false);
  const toggleConfirmationModal = () =>
    setIsConfirmationModalOpen(!isConfirmationModalOpen);

  const [isEntityModalOpen, setIsEntitynModalOpen] = useState(false);
  const toggleEntityModal = () => setIsEntitynModalOpen(!isEntityModalOpen);

  const { sendRequestById } = useDeleteDriver();

  const deleteDriver = useCallback(async () => {
    await sendRequestById(selectedDriverId);
    await sendRequest();
  }, [selectedDriverId, sendRequest, sendRequestById]);

  const serializedData = drivers?.map((driver) => ({
    ...driver,
  }));

  const { driverFormFields } = useGetDriverMetaData();

  return {
    data: serializedData,
    loading,
    toggleConfirmationModal,
    isConfirmationModalOpen,
    selectedDriverId,
    setSelectedDriverId,
    deleteDriver,
    driverFormFields,
    isEntityModalOpen,
    setIsEntitynModalOpen,
    toggleEntityModal,
  };
};
