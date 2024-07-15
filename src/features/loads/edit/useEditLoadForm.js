import { yupResolver } from "@hookform/resolvers/yup";
import { useRef } from "react";
import { useForm } from "react-hook-form";
import { useEditLoadSchema } from "./useEditLoadSchema";
import { useEditLoad } from "./useEditLoad";
import { useGetLoad } from "../list/useGetLoad";
import { useNavigate, useParams } from "react-router-dom";
import { useToastNotification } from "utils/toast/useToastNotification";

export const useEditLoadForm = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { load, isLoading: isLoadValid } = useGetLoad(id);
  const { editLoadSchema, isLoading, editLoadFormFields } =
    useEditLoadSchema(load);

  const { showSuccessToast, showErrorToast } = useToastNotification();

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(editLoadSchema),
    defaultValues: load,
  });

  const notificationAlertRef = useRef(null);

  const { sendRequest } = useEditLoad(id);

  const onSubmit = async (formFields) => {
    try {
      await sendRequest({
        data: {
          is_active:
            formFields.is_active !== undefined
              ? formFields.is_active
              : load?.is_active,
          is_deleted:
            formFields.is_deleted !== undefined
              ? formFields.is_deleted
              : load?.is_deleted,
          type: formFields.type !== undefined ? formFields.type : load?.type,
          dispatch_zone:
            formFields.dispatch_zone !== undefined
              ? formFields.dispatch_zone
              : load?.dispatch_zone?.id,
          customer:
            formFields.customer !== undefined
              ? formFields.customer
              : load?.customer?.id,
          weight:
            formFields.weight !== undefined ? formFields.weight : load?.weight,
          commodity:
            formFields.commodity !== undefined
              ? formFields.commodity
              : load?.commodity,
          quantity_value:
            formFields.quantity_value !== undefined
              ? formFields.quantity_value
              : load?.quantity_value,
          quantity_unit:
            formFields.quantity_unit !== undefined
              ? formFields.quantity_unit
              : load?.quantity_unit,
          packaging:
            formFields.packaging !== undefined
              ? formFields.packaging
              : load?.packaging,
          booked_by:
            formFields.booked_by !== undefined
              ? formFields.booked_by
              : load?.booked_by,
          status:
            formFields.status !== undefined ? formFields.status : load?.status,
          initial_pickup_stop:
            formFields.initial_pickup_stop !== undefined
              ? formFields.initial_pickup_stop
              : load?.initial_pickup_stop?.id,
          final_delivery_stop:
            formFields.final_delivery_stop !== undefined
              ? formFields.final_delivery_stop
              : load?.final_delivery_stop?.id,
        },
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
    isLoading: isLoadValid || isLoading,
    load,
    editLoadFormFields,
    notificationAlertRef,
  };
};
