import { yupResolver } from "@hookform/resolvers/yup";
import { useRef } from "react";
import { useForm } from "react-hook-form";
import { useGetCustomerMetaData } from "../metadata/useGetCustomerMetaData";
import { useEditCustomer } from "./useEditCustomer";
import { useGetCustomer } from "../list/useGetCustomer";
import { useNavigate, useParams } from "react-router-dom";
import { useToastNotification } from "utils/toast/useToastNotification";

export const useEditCustomerForm = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { customer, loading: isCustomerValid } = useGetCustomer(id);
  const { customerSchema, customerFormFields, customerSchemaGroups } =
    useGetCustomerMetaData(customer);

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(customerSchema),
    defaultValues: customer,
  });
  const { showSuccessToast, showErrorToast } = useToastNotification();

  const notificationAlertRef = useRef(null);

  const { sendRequest } = useEditCustomer(id);
  const onSubmit = async (formFields) => {
    try {
      await sendRequest({
        data: formFields,
        physical_address:
          formFields?.physical_address ?? customer?.physical_address?.id,
        mailing_address: formFields["is_same_as_physical"]
          ? formFields?.physical_address
          : formFields?.mailing_address,
      });
      showSuccessToast();
    } catch (error) {
      showErrorToast();
    }
    navigate("/admin/customers");
  };

  const registerRs = (fieldName, options) => {
    const registeredField = register(fieldName, options);
    const ref = registeredField.ref;
    delete registeredField.ref;
    return { ...registeredField, innerRef: ref };
  };

  return {
    register: registerRs,
    onSubmit,
    handleSubmit,
    control,
    errors,
    isLoading: isCustomerValid,
    customer,
    customerFormFields,
    notificationAlertRef,
    customerSchemaGroups,
  };
};
