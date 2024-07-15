import React from "react";
import { useCreateTruckForm } from "./useCreateTruckForm";
import { CreateEntityForm } from "../../../components/Forms/CreateEntityForm";

export const CreateTruckForm = () => {
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
    truckFormFields,
    truckSchemaGroups,
  } = useCreateTruckForm();

  return (
    <>
      {!isLoading && (
        <div className="content">
          <CreateEntityForm
            entityName={"Truck"}
            formFields={truckFormFields}
            schemaGroups={truckSchemaGroups}
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
