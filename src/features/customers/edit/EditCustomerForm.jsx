import React from "react";
import { useEditCustomerForm } from "./useEditCustomerForm";
import { CreateEntityForm } from "components/Forms/CreateEntityForm";

export const EditCustomerForm = () => {
  const {
    onSubmit,
    register,
    handleSubmit,
    control,
    isLoading,
    errors,
    customer,
    customerFormFields,
    customerSchemaGroups,
  } = useEditCustomerForm();

  return (
    <>
      {!isLoading && customer && Object.keys(customer).length > 0 && (
        <div className="content">
          <CreateEntityForm
            entityName={"Customer"}
            mode="edit"
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
