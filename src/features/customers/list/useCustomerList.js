import { useCallback, useState } from "react";
import { useGetAllCustomers } from "./useGetAllCustomers";
import { useDeleteCustomer } from "../delete/useDeleteCustomer";
import { useGetCustomerMetaData } from "../metadata/useGetCustomerMetaData";

export const useCustomerList = () => {
  const { loading, data: customers, sendRequest } = useGetAllCustomers();
  const [selectedCustomerId, setSelectedCustomerId] = useState("");
  const { customerFormFields } = useGetCustomerMetaData();

  const [isEntityModalOpen, setIsEntitynModalOpen] = useState(false);
  const toggleEntityModal = () => setIsEntitynModalOpen(!isEntityModalOpen);

  const [isConfirmationModalOpen, setIsConfirmationModalOpen] = useState(false);
  const toggleConfirmationModal = () =>
    setIsConfirmationModalOpen(!isConfirmationModalOpen);

  const { sendRequestById } = useDeleteCustomer();

  const deleteCustomer = useCallback(async () => {
    await sendRequestById(selectedCustomerId);
    await sendRequest();
  }, [selectedCustomerId, sendRequest, sendRequestById]);

  const serializedData = customers?.map((customer) => ({
    ...customer,
  }));

  return {
    data: serializedData,
    loading,
    toggleConfirmationModal,
    isConfirmationModalOpen,
    selectedCustomerId,
    setSelectedCustomerId,
    deleteCustomer,
    isEntityModalOpen,
    toggleEntityModal,
    customerFormFields,
  };
};
