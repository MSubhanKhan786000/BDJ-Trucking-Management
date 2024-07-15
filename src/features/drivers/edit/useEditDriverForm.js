import { yupResolver } from "@hookform/resolvers/yup";
import { useEffect, useRef } from "react";
import { useForm } from "react-hook-form";
import { useGetDriverMetaData } from "../metadata/useGetDriverMetaData";
import { useEditDriver } from "./useEditDriver";
import { useGetDriver } from "../list/useGetDriver";
import { useNavigate, useParams } from "react-router-dom";
import { useGetAllDriverDocuments } from "../driver-documents/useGetAllDriverDocuments";
import { useMultiImageUpload } from "components/CustomUpload/useMultiImageUpload";
import { companyData } from "utils/defaultConfig/companyData";
import { useToastNotification } from "utils/toast/useToastNotification";
import { useCreateDriverDocuments } from "../driver-documents/useCreateDriverDocuments";
import { useDeleteDriverDocument } from "../driver-documents/useDeleteDriverDocument";
import { format } from "date-fns";

export const useEditDriverForm = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { driver, loading: isDriverValid } = useGetDriver(id);
  const { data: driverDocuments, loading: isDriverDocumentsLoading } =
    useGetAllDriverDocuments(id);
  const {
    imagePreviewUrl,
    setImagePreviewUrl,
    attachedFiles,
    setAttachedFiles,
    previousAttachedFiles,
    setPreviousAttachedFiles,
  } = useMultiImageUpload();

  const { driverSchema, driverFormFields, driverSchemaGroups } =
    useGetDriverMetaData(driver);

  useEffect(() => {
    if (!isDriverDocumentsLoading) {
      setPreviousAttachedFiles(driverDocuments);
    } else {
      setPreviousAttachedFiles([]);
    }
  }, [driverDocuments, isDriverDocumentsLoading, setPreviousAttachedFiles]);

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(driverSchema),
    defaultValues: driver,
  });

  const { sendRequestById: createNewDocumentById } = useCreateDriverDocuments();
  const { sendRequestById } = useDeleteDriverDocument(id);

  const { showSuccessToast, showErrorToast } = useToastNotification();

  const notificationAlertRef = useRef(null);

  const { sendRequest } = useEditDriver(id);

  const mergeFormFields = (formFields, driver) => {
    const data = {};

    const fields = new Set([
      ...Object.keys(formFields),
      ...Object.keys(driver),
    ]);

    fields.forEach((field) => {
      data[field] =
        formFields[field] !== undefined ? formFields[field] : driver?.[field];
    });

    return data;
  };
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
    const data = mergeFormFields(formattedFormFields, driver);
    try {
      const response = await sendRequest({
        data: { ...data, company: companyData.value },
      });

      const uploadFiles = async () => {
        if (response?.data?.code === 200) {
          for (let i = 0; i < attachedFiles.length; i++) {
            const formData = new FormData();
            formData.append("image", attachedFiles[i]);
            formData.append("name", attachedFiles[i].name);
            try {
              await createNewDocumentById(id, formData);
            } catch (error) {
              showErrorToast();
              return;
            }
          }
          showSuccessToast();
          navigate("/admin/drivers");
        }
      };

      await uploadFiles();
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
    isLoading: isDriverValid,
    driver,
    driverFormFields,
    notificationAlertRef,
    imagePreviewUrl,
    setImagePreviewUrl,
    attachedFiles,
    setAttachedFiles,
    previousAttachedFiles,
    setPreviousAttachedFiles,
    deleteDocument: sendRequestById,
    driverSchemaGroups,
  };
};
