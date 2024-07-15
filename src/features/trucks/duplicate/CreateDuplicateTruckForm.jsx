import React from "react";
import { useCreateDuplicateTruckForm } from "./useCreateDuplicateTruckForm";
import { CreateEntityForm } from "components/Forms/CreateEntityForm";

export const CreateDuplicateTruckForm = () => {
  const {
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
    deleteDocument,
  } = useCreateDuplicateTruckForm();
  return (
    <>
      {!isLoading && truck && Object.keys(truck).length > 0 && (
        <div className="content">
          <CreateEntityForm
            entityName={"Truck"}
            mode="create"
            initialValue={truck}
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
            deleteDocument={deleteDocument}
          />
        </div>
      )}
    </>
  );
};
