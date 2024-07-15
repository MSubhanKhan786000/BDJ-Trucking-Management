import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { useRef } from "react";
import { useGetUserMetaData } from "../metadata/useGetUserMetaData";
import { useCreateUser } from "./useCreateUser";
import { showNotification } from "views/forms/utils/ExtendedErrorAlert";
import { useNavigate } from "react-router-dom";

export const useCreateUserForm = () => {
  const { userSchema, isLoading } = useGetUserMetaData();
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(userSchema),
  });
  const navigate = useNavigate();

  const notificationAlertRef = useRef(null);

  const { sendRequest } = useCreateUser();

  const onSubmit = async (formFields) => {
    try {
      await sendRequest({
        data: formFields,
      });
      showNotification({
        notificationAlertRef,
        message: <div>Operation Successful</div>,
        place: "tr",
        type: "success",
        icon: "tim-icons icon-bell-55",
      });
    } catch (error) {
      showNotification({
        notificationAlertRef,
        message: <div>There was an Unknown Error</div>,
        place: "tr",
        type: "danger",
        icon: "tim-icons icon-bell-55",
      });
    }
    navigate("/admin/users");
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
