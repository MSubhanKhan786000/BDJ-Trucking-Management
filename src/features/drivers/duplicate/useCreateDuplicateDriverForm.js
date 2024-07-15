import { useEditDriverForm } from "../edit/useEditDriverForm";
import { useCreateDriverForm } from "../create/useCreateDriverForm";

export const useCreateDuplicateDriverForm = () => {
  const {
    register,
    handleSubmit,
    control,
    isLoading,
    errors,
    driver,
    driverFormFields,
    imagePreviewUrl,
    setImagePreviewUrl,
    attachedFiles,
    setAttachedFiles,
    driverSchemaGroups,
    previousAttachedFiles,
    setPreviousAttachedFiles,
    deleteDocument,
  } = useEditDriverForm();

  const { onSubmit: createDuplicate } = useCreateDriverForm();

  const onSubmit = (formFields) => {
    createDuplicate(formFields);
  };

  return {
    onSubmit,
    register,
    handleSubmit,
    control,
    isLoading,
    errors,
    driver,
    driverFormFields,
    imagePreviewUrl,
    setImagePreviewUrl,
    attachedFiles,
    setAttachedFiles,
    driverSchemaGroups,
    previousAttachedFiles,
    setPreviousAttachedFiles,
    deleteDocument,
  };
};
