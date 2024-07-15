import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { useGetTruckMetaData } from "../metadata/useGetTruckMetaData";
import { useCreateTruck } from "./useCreateTruck";
import { useNavigate } from "react-router-dom";
import { useMultiImageUpload } from "components/CustomUpload/useMultiImageUpload";
import { format } from "date-fns";
import { companyData } from "utils/defaultConfig/companyData";
import { useCreateTruckDocuments } from "../truck-documents/useCreateTruckDocuments";
import { useToastNotification } from "utils/toast/useToastNotification";

export const useCreateTruckForm = () => {
  const { truckSchema, isLoading, truckSchemaGroups, truckFormFields } =
    useGetTruckMetaData();
  const {
    imagePreviewUrl,
    setImagePreviewUrl,
    attachedFiles,
    setAttachedFiles,
  } = useMultiImageUpload();
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(truckSchema),
  });

  const { sendRequestById } = useCreateTruckDocuments();
  const navigate = useNavigate();

  const { sendRequest } = useCreateTruck();
  const { showSuccessToast, showErrorToast } = useToastNotification();

  const formatToDate = (date) => format(date, "yyyy-MM-dd");

  const formatFormFieldsToDate = (formFields) => {
    const formattedFields = {};

    for (const [key, value] of Object.entries(formFields)) {
      if (value instanceof Date) {
        formattedFields[key] = formatToDate(value);
      } else {
        formattedFields[key] = value;
      }
    }

    return formattedFields;
  };

  const onSubmit = async (formFields) => {
    const formattedFormFields = formatFormFieldsToDate(formFields);
    try {
      const response = await sendRequest({
        data: {
          ...formattedFormFields,
        },
      });
      const uploadFiles = async () => {
        if (response?.data?.code === 201) {
          for (let i = 0; i < attachedFiles.length; i++) {
            const formData = new FormData();
            formData.append("image", attachedFiles[i]);
            formData.append("name", attachedFiles[i].name);
            try {
              await sendRequestById(response?.data?.data.id, formData);
              showSuccessToast();
            } catch (error) {
              showErrorToast();
            }
          }
        }
      };
      await uploadFiles();
      navigate("/admin/trucks");
    } catch (error) {
      showErrorToast();
    }
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
    truckSchema,
    imagePreviewUrl,
    setImagePreviewUrl,
    attachedFiles,
    setAttachedFiles,
    truckFormFields,
    truckSchemaGroups,
  };
};
