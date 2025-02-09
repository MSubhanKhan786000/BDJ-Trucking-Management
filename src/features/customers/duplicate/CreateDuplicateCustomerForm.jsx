import React from "react";
import { useCreateDuplicateCustomerForm } from "./useCreateDuplicateCustomerForm";
import { CustomerEntityForm } from "components/Forms/CustomerEntityForm";

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
          <CustomerEntityForm
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
