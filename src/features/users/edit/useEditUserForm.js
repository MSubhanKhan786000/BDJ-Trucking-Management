import { yupResolver } from "@hookform/resolvers/yup";
import React, { useRef } from "react";
import { useForm } from "react-hook-form";
import { showNotification } from "views/forms/utils/ExtendedErrorAlert";
import {useGetUserMetaData} from "../metadata/useGetUserMetaData";
import { useEditUser } from "./useEditUser";
import { useGetUser } from "../list/useGetUser";
import { useNavigate, useParams } from "react-router-dom";

export const useEditUserForm = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { user, loading: isUserValid } = useGetUser(id);
  const { userSchema, userFormFields } =
    useGetUserMetaData(user);

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(userSchema),
    defaultValues: user,
  });

  const notificationAlertRef = useRef(null);

  const { sendRequest } = useEditUser(id);
  console.log("isUserValid", isUserValid);
  const onSubmit = async (formFields) => {
    try {
      await sendRequest({
        data: {
          is_active:
            formFields.is_active !== undefined
              ? formFields.is_active
              : user?.is_active,
          is_deleted:
            formFields.is_deleted !== undefined
              ? formFields.is_deleted
              : user?.is_deleted,
          name:
            formFields.name !== undefined
              ? formFields.name
              : user?.name,

          load_number:
            formFields.load_number !== undefined
              ? formFields.load_number
              : user?.load_number,

          billable_mileage:
            formFields.billable_mileage !== undefined
              ? formFields.billable_mileage
              : user?.billable_mileage,

          contact:
            formFields.contact !== undefined
              ? formFields.contact
              : user?.contact,

          reference_number:
            formFields.reference_number !== undefined
              ? formFields.reference_number
              : user?.reference_number,

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
    isLoading: isUserValid,
    user,
    userFormFields,
    notificationAlertRef,
  };
};
