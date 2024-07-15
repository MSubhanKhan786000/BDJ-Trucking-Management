import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { useCreateLoad } from "./useCreateLoad";
import { useNavigate } from "react-router-dom";
import { useToastNotification } from "utils/toast/useToastNotification";
import { useGetLoadMetaData } from "../metadata/useGetLoadMetaData";

export const useCreateLoadForm = () => {
  const { loadSchema, isLoading } = useGetLoadMetaData();
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(loadSchema),
  });
  const navigate = useNavigate();
  const { showSuccessToast, showErrorToast } = useToastNotification();

  const { sendRequest } = useCreateLoad();

  const onSubmit = async (formFields) => {
    try {
      await sendRequest({
        data: formFields,
      });
      showSuccessToast();
    } catch (error) {
      showErrorToast();
    }
    navigate("/admin/loads");
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
