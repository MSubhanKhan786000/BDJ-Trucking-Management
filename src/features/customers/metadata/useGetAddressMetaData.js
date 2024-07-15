import { statesData } from "utils/defaultConfig/statesData";
import { useGenerateEntitySchema } from "utils/forms/useGenerateEntitySchema";

export const useGetAddressMetaData = () => {
  const addressFormFields = [
    {
      name: "location",
      type: "text",
      placeholder: "Enter Location",
      label: "Location",
      isRequired: true,
    },
    {
      name: "street",
      type: "text",
      placeholder: "Enter Street",
      label: "Street",
      isRequired: true,
    },
    {
      name: "street2",
      type: "text",
      placeholder: "Enter Street2",
      label: "Street2",
      isRequired: true,
    },
    {
      name: "city",
      type: "text",
      placeholder: "Enter City",
      label: "City",
      isRequired: true,
    },
    {
      name: "state",
      type: "select",
      options: statesData?.map((state) => ({
        label: `${state?.name} (${state?.code})`,
        value: state?.code,
      })),
      placeholder: "Enter State",
      label: "State",
      isRequired: true,
    },
    {
      name: "zip_code",
      type: "text",
      placeholder: "Enter Zip Code",
      label: "Zip Code",
      isRequired: true,
    },
  ];

  const { generateSchema } = useGenerateEntitySchema();

  const addressSchema = generateSchema(addressFormFields);

  return { addressFormFields, addressSchema };
};
