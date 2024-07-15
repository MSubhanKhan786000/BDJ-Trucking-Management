import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { useRef } from "react";
import { useGetDispatchMetaData } from "../metadata/useGetDispatchMetaData";
import { useCreateDispatch } from "./useCreateDispatch";
import { showNotification } from "views/forms/utils/ExtendedErrorAlert";
import { useNavigate } from "react-router-dom";

export const useCreateDispatchForm = () => {
  const { dispatchSchema, isLoading } = useGetDispatchMetaData();
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(dispatchSchema),
  });
  const navigate = useNavigate();

  const notificationAlertRef = useRef(null);

  const { sendRequest } = useCreateDispatch();

  const onSubmit = async (formFields) => {
    try {
      await sendRequest({
        data: { ...formFields, assignment: 1, billing_status: "load_invoiced" },
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
    navigate("/admin/dispatches");
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
