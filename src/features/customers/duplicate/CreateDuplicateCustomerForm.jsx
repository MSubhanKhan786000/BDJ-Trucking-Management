import { CreateEntityForm } from "components/Forms/CreateEntityForm";
import React from "react";
import { useCreateDuplicateCustomerForm } from "./useCreateDuplicateCustomerForm";

export const CreateDuplicateCustomerForm = () => {
  const {
    control,
    customer,
    customerFormFields,
    errors,
    handleSubmit,
    isLoading,
    onSubmit,
    register,
    customerSchemaGroups,
  } = useCreateDuplicateCustomerForm();

  return (
    <>
      {!isLoading && customer && Object.keys(customer).length > 0 && (
        <div className="content">
          <CreateEntityForm
            entityName={"Customer"}
            mode="create"
            initialValue={customer}
            formFields={customerFormFields}
            schemaGroups={customerSchemaGroups}
            onSubmit={onSubmit}
            register={register}
            handleSubmit={handleSubmit}
            control={control}
            errors={errors}
          />
        </div>
      )}
    </>
  );
};
