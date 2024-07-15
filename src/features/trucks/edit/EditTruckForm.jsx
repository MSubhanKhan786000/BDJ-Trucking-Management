import React from "react";
import { CreateEntityForm } from "components/Forms/CreateEntityForm";
import { useEditTruckForm } from "./useEditTruckForm";

export const EditTruckForm = () => {
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
    previousAttachedFiles,
    setPreviousAttachedFiles,
    deleteDocument,
  } = useEditTruckForm();
  return (
    <>
      {!isLoading && truck && Object.keys(truck).length > 0 && (
        <div className="content">
          <CreateEntityForm
            entityName={"Truck"}
            mode="edit"
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
            previousAttachedFiles={previousAttachedFiles}
            setPreviousAttachedFiles={setPreviousAttachedFiles}
            deleteDocument={deleteDocument}
          />
        </div>
      )}
    </>
  );
};
