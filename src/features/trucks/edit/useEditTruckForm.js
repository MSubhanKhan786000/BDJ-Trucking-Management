import { yupResolver } from "@hookform/resolvers/yup";
import { useEffect, useRef } from "react";
import { useForm } from "react-hook-form";
import { useGetTruckMetaData } from "../metadata/useGetTruckMetaData";
import { useEditTruck } from "./useEditTruck";
import { useGetTruck } from "../list/useGetTruck";
import { useNavigate, useParams } from "react-router-dom";
import { useGetAllTruckDocuments } from "../truck-documents/useGetAllTruckDocuments";
import { useMultiImageUpload } from "components/CustomUpload/useMultiImageUpload";
import { companyData } from "utils/defaultConfig/companyData";
import { useToastNotification } from "utils/toast/useToastNotification";
import { useCreateTruckDocuments } from "../truck-documents/useCreateTruckDocuments";
import { useDeleteTruckDocument } from "../truck-documents/useDeleteTruckDocument";
import { format } from "date-fns";

export const useEditTruckForm = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { truck, loading: isTruckValid } = useGetTruck(id);
  const { data: truckDocuments, loading: isTruckDocumentsLoading } =
    useGetAllTruckDocuments(id);
  const {
    imagePreviewUrl,
    setImagePreviewUrl,
    attachedFiles,
    setAttachedFiles,
    previousAttachedFiles,
    setPreviousAttachedFiles,
  } = useMultiImageUpload();

  const { truckSchema, truckFormFields, truckSchemaGroups } =
    useGetTruckMetaData(truck);

  useEffect(() => {
    if (!isTruckDocumentsLoading) {
      setPreviousAttachedFiles(truckDocuments);
    } else {
      setPreviousAttachedFiles([]);
    }
  }, [truckDocuments, isTruckDocumentsLoading, setPreviousAttachedFiles]);

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(truckSchema),
    defaultValues: truck,
  });

  const { sendRequestById: createNewDocumentById } = useCreateTruckDocuments();
  const { sendRequestById } = useDeleteTruckDocument(id);

  const { showSuccessToast, showErrorToast } = useToastNotification();

  const notificationAlertRef = useRef(null);

  const { sendRequest } = useEditTruck(id);

  const mergeFormFields = (formFields, truck) => {
    const data = {};

    const fields = new Set([
      ...Object.keys(formFields),
      ...Object.keys(truck),
    ]);

    fields.forEach((field) => {
      data[field] =
        formFields[field] !== undefined ? formFields[field] : truck?.[field];
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
    const data = mergeFormFields(formattedFormFields, truck);
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
              console.log("error", error);
              showErrorToast();
              return;
            }
          }
          showSuccessToast();
          navigate("/admin/trucks");
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
    isLoading: isTruckValid,
    truck,
    truckFormFields,
    notificationAlertRef,
    imagePreviewUrl,
    setImagePreviewUrl,
    attachedFiles,
    setAttachedFiles,
    previousAttachedFiles,
    setPreviousAttachedFiles,
    deleteDocument: sendRequestById,
    truckSchemaGroups,
  };
};
