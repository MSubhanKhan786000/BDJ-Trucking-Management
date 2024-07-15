import React from "react";
import { useCreateDriverForm } from "./useCreateDriverForm";
import { CreateEntityForm } from "../../../components/Forms/CreateEntityForm";

export const CreateDriverForm = () => {
  const {
    onSubmit,
    register,
    handleSubmit,
    control,
    isLoading,
    errors,
    imagePreviewUrl,
    setImagePreviewUrl,
    attachedFiles,
    setAttachedFiles,
    driverFormFields,
    driverSchemaGroups,
  } = useCreateDriverForm();

  return (
    <>
      {!isLoading && (
        <div className="content">
          <CreateEntityForm
            entityName={"Driver"}
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
          />
        </div>
      )}
    </>
  );
};
