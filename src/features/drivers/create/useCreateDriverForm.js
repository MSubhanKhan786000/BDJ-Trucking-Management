import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { useGetDriverMetaData } from "../metadata/useGetDriverMetaData";
import { useCreateDriver } from "./useCreateDriver";
import { useNavigate } from "react-router-dom";
import { useMultiImageUpload } from "components/CustomUpload/useMultiImageUpload";
import { format } from "date-fns";
import { companyData } from "utils/defaultConfig/companyData";
import { useCreateDriverDocuments } from "../driver-documents/useCreateDriverDocuments";
import { useToastNotification } from "utils/toast/useToastNotification";

export const useCreateDriverForm = () => {
  const { driverSchema, isLoading, driverSchemaGroups, driverFormFields } =
    useGetDriverMetaData();
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
    resolver: yupResolver(driverSchema),
  });

  const { sendRequestById } = useCreateDriverDocuments();
  const navigate = useNavigate();

  const { sendRequest } = useCreateDriver();
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
          emergency_phone: 132,
          company: companyData.value,
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
      navigate("/admin/drivers");
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
    driverSchema,
    imagePreviewUrl,
    setImagePreviewUrl,
    attachedFiles,
    setAttachedFiles,
    driverFormFields,
    driverSchemaGroups,
  };
};
