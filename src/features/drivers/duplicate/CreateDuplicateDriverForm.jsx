import React from "react";
import { useCreateDuplicateDriverForm } from "./useCreateDuplicateDriverForm";
import { CreateEntityForm } from "components/Forms/CreateEntityForm";

export const CreateDuplicateDriverForm = () => {
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
    deleteDocument,
  } = useCreateDuplicateDriverForm();
  return (
    <>
      {!isLoading && driver && Object.keys(driver).length > 0 && (
        <div className="content">
          <CreateEntityForm
            entityName={"Driver"}
            mode="create"
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
            deleteDocument={deleteDocument}
          />
        </div>
      )}
    </>
  );
};
