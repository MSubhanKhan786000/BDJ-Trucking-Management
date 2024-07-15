import { CreateEntityForm } from "components/Forms/CreateEntityForm";
import React from "react";
import { useCreateAddressForm } from "./useCreateAddressForm";

export const CreateAddressForm = () => {
  const {
    addressFormFields,
    control,
    errors,
    handleSubmit,
    register,
    onSubmit,
  } = useCreateAddressForm();
  return (
    <div className="content">
      <CreateEntityForm
        entityName={"Address"}
        formFields={addressFormFields}
        onSubmit={onSubmit}
        register={register}
        handleSubmit={handleSubmit}
        control={control}
        errors={errors}
        filesUploadFlag={false}
      />
    </div>
  );
};
