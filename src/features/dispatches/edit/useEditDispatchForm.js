import { yupResolver } from "@hookform/resolvers/yup";
import React, { useRef } from "react";
import { useForm } from "react-hook-form";
import { showNotification } from "views/forms/utils/ExtendedErrorAlert";
import { useGetDispatchMetaData } from "../metadata/useGetDispatchMetaData";
import { useEditDispatch } from "./useEditDispatch";
import { useGetDispatch } from "../list/useGetDispatch";
import { useNavigate, useParams } from "react-router-dom";

export const useEditDispatchForm = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { dispatch, loading: isDispatchValid } = useGetDispatch(id);
  const { dispatchSchema, dispatchFormFields } =
    useGetDispatchMetaData(dispatch);

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(dispatchSchema),
    defaultValues: dispatch,
  });

  const notificationAlertRef = useRef(null);

  const { sendRequest } = useEditDispatch(id);
  const onSubmit = async (formFields) => {
    try {
      await sendRequest({
        data: {
          is_active:
            formFields.is_active !== undefined
              ? formFields.is_active
              : dispatch?.is_active,
          is_deleted:
            formFields.is_deleted !== undefined
              ? formFields.is_deleted
              : dispatch?.is_deleted,
          name:
            formFields.name !== undefined ? formFields.name : dispatch?.name,

          load_number:
            formFields.load_number !== undefined
              ? formFields.load_number
              : dispatch?.load_number,

          billable_mileage:
            formFields.billable_mileage !== undefined
              ? formFields.billable_mileage
              : dispatch?.billable_mileage,

          contact:
            formFields.contact !== undefined
              ? formFields.contact
              : dispatch?.contact,

          reference_number:
            formFields.reference_number !== undefined
              ? formFields.reference_number
              : dispatch?.reference_number,
        },
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
    isLoading: isDispatchValid,
    dispatch,
    dispatchFormFields,
    notificationAlertRef,
  };
};
