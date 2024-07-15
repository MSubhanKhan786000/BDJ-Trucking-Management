import { useCallback, useState } from "react";
import { useGetAllUsers } from "./useGetAllUsers";
import { useDeleteUser } from "../delete/useDeleteUser";

export const useUserList = () => {
  const { loading, data: users, sendRequest } = useGetAllUsers();
  const [selectedUserId, setSelectedUserId] = useState("");

  const [isConfirmationModalOpen, setIsConfirmationModalOpen] = useState(false);
  const toggleConfirmationModal = () =>
    setIsConfirmationModalOpen(!isConfirmationModalOpen);

  const { sendRequestById } = useDeleteUser();

  const deleteUser = useCallback(async () => {
    await sendRequestById(selectedUserId);
    await sendRequest();
  }, [selectedUserId, sendRequest, sendRequestById]);

  const serializedData = users?.map((user) => ({
    ...user,
  }));

  return {
    data: serializedData,
    loading,
    toggleConfirmationModal,
    isConfirmationModalOpen,
    selectedUserId,
    setSelectedUserId,
    deleteUser,
  };
};
