import { useEditCustomerForm } from "../edit/useEditCustomerForm";
import { useCreateCustomerForm } from "../create/useCreateCustomerForm";

export const useCreateDuplicateCustomerForm = () => {
  const {
    register: registerRs,
    handleSubmit,
    control,
    errors,
    isLoading: isCustomerValid,
    customer,
    customerFormFields,
    notificationAlertRef,
    customerSchemaGroups,
  } = useEditCustomerForm();

  const { onSubmit: createDuplicate } = useCreateCustomerForm();

  const onSubmit = (formFields) => {
    createDuplicate(formFields);
  };

  return {
    register: registerRs,
    handleSubmit,
    control,
    errors,
    isLoading: isCustomerValid,
    customer,
    customerFormFields,
    notificationAlertRef,
    onSubmit,
    customerSchemaGroups,
  };
};
