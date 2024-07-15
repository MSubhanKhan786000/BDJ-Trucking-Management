import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { useGetCustomerMetaData } from "../metadata/useGetCustomerMetaData";
import { useCreateCustomer } from "./useCreateCustomer";
import { useNavigate } from "react-router-dom";
import { useToastNotification } from "../../../utils/toast/useToastNotification";

export const useCreateCustomerForm = () => {
  const { customerSchema, isLoading } = useGetCustomerMetaData();
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(customerSchema),
  });
  const navigate = useNavigate();

  const { sendRequest } = useCreateCustomer();
  const { showSuccessToast, showErrorToast } = useToastNotification();

  const onSubmit = async (formFields) => {
    try {
      await sendRequest({
        data: {
          ...formFields,
          mailing_address: formFields["is_same_as_physical"]
            ? formFields?.physical_address
            : formFields?.mailing_address,
        },
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
    isLoading,
  };
};
