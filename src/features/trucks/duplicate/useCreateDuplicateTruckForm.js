import { useEditTruckForm } from "../edit/useEditTruckForm";
import { useCreateTruckForm } from "../create/useCreateTruckForm";

export const useCreateDuplicateTruckForm = () => {
  const {
    register,
    handleSubmit,
    control,
    isLoading,
    errors,
    truck,
    truckFormFields,
    imagePreviewUrl,
    setImagePreviewUrl,
    attachedFiles,
    setAttachedFiles,
    truckSchemaGroups,
    previousAttachedFiles,
    setPreviousAttachedFiles,
    deleteDocument,
  } = useEditTruckForm();

  const { onSubmit: createDuplicate } = useCreateTruckForm();

  const onSubmit = async (formFields) => {
    createDuplicate(formFields);
  };

  return {
    onSubmit,
    register,
    handleSubmit,
    control,
    isLoading,
    errors,
    truck,
    truckFormFields,
    imagePreviewUrl,
    setImagePreviewUrl,
    attachedFiles,
    setAttachedFiles,
    truckSchemaGroups,
    previousAttachedFiles,
    setPreviousAttachedFiles,
    deleteDocument,
  };
};
