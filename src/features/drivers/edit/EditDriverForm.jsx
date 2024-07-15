import React from "react";
import { CreateEntityForm } from "components/Forms/CreateEntityForm";
import { useEditDriverForm } from "./useEditDriverForm";

export const EditDriverForm = () => {
  const {
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
  } = useEditDriverForm();
  return (
    <>
      {!isLoading && driver && Object.keys(driver).length > 0 && (
        <div className="content">
          <CreateEntityForm
            entityName={"Driver"}
            mode="edit"
            initialValue={driver}
            formFields={driverFormFields}
            schemaGroups={driverSchemaGroups}
            onSubmit={onSubmit}
            register={register}
            handleSubmit={handleSubmit}
            control={control}
            errors={errors}
            filesUploadFlag={true}
            imagePreviewUrl={imagePreviewUrl}
            setImagePreviewUrl={setImagePreviewUrl}
            attachedFiles={attachedFiles}
            setAttachedFiles={setAttachedFiles}
            previousAttachedFiles={previousAttachedFiles}
            setPreviousAttachedFiles={setPreviousAttachedFiles}
            deleteDocument={deleteDocument}
          />
        </div>
      )}
    </>
  );
};
