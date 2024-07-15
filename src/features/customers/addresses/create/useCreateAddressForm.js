import { useForm } from "react-hook-form";
import { useCreateAddress } from "./useCreateAddress";
import { yupResolver } from "@hookform/resolvers/yup";
import { useGetAddressMetaData } from "features/customers/metadata/useGetAddressMetaData";
import { useToastNotification } from "utils/toast/useToastNotification";
import { useNavigate } from "react-router-dom";

export const useCreateAddressForm = () => {
  const { addressFormFields, addressSchema } = useGetAddressMetaData();
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(addressSchema),
  });
  const { sendRequest: createAddress } = useCreateAddress();
  const { showSuccessToast, showErrorToast } = useToastNotification();
  const navigate = useNavigate();

  const onSubmit = async (formFields) => {
    try {
      await createAddress({
        data: formFields,
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
    onSubmit,
    addressFormFields,
    register: registerRs,
    handleSubmit,
    control,
    errors,
  };
};
