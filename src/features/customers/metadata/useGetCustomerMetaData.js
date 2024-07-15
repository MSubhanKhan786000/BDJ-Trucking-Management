import { useGenerateEntitySchema } from "utils/forms/useGenerateEntitySchema";
import { useGetAllAddresses } from "../addresses/list/useGetAllAddresses";

export const useGetCustomerMetaData = () => {
  const { data: addresses } = useGetAllAddresses();
  const customerFormFields = [
    {
      name: "dba",
      type: "text",
      placeholder: "Enter DBA",
      label: "DBA",
    },
    {
      name: "first_name",
      type: "text",
      placeholder: "Enter First Name",
      label: "First Name",
      isRequired: true,
    },
    {
      name: "middle_name",
      type: "text",
      placeholder: "Enter Middle Name",
      label: "Middle Name",
    },
    {
      name: "last_name",
      type: "text",
      placeholder: "Enter Last Name",
      label: "Last Name",
      isRequired: true,
    },
    {
      name: "display_name",
      type: "text",
      placeholder: "Enter Display Name",
      label: "Display Name",
    },
    {
      name: "short_name",
      type: "text",
      placeholder: "Enter Short Name",
      label: "Short Name",
      isRequired: true,
    },
    {
      name: "mc_or_ff_number",
      type: "number",
      placeholder: "Enter MC/FF Number",
      label: "MC/FF Number",
    },
    {
      name: "fein_or_ssn_number",
      type: "number",
      placeholder: "Enter FEIN/SSN Number",
      label: "FEIN/SSN Number",
    },
    {
      name: "us_dot_number",
      type: "number",
      placeholder: "Enter US DOT Number",
      label: "US DOT Number",
    },
    {
      name: "scac_code",
      type: "text",
      placeholder: "Enter SCAC Code",
      label: "SCAC Code",
    },
    {
      name: "attention",
      type: "text",
      placeholder: "Enter Attention",
      label: "Attention",
    },
    {
      name: "watt",
      type: "text",
      placeholder: "Enter Watt",
      label: "Watt",
      group: "Contact",
    },
    {
      name: "local_phone",
      type: "number",
      placeholder: "Enter Local Phone",
      label: "Local Phone",
      group: "Contact",
    },
    {
      name: "fax",
      type: "number",
      placeholder: "Enter Fax",
      label: "Fax",
      group: "Contact",
    },
    {
      name: "website",
      type: "text",
      placeholder: "Enter Website",
      label: "Website",
      group: "Contact",
    },
    {
      name: "email",
      type: "email",
      placeholder: "Enter E-mail",
      label: "E-mail",
      group: "Contact",
    },

    {
      name: "physical_address",
      type: "select",
      placeholder: "Please Select Address",
      label: "Physical Address",
      options: addresses?.map((address) => ({
        label: `${address?.street}, ${address?.street2}, ${address?.city}, ${address?.state} - (${address?.zip_code})`,
        value: address?.id,
      })),
      isRequired: true,
    },
    {
      name: "mailing_address",
      type: "select",
      placeholder: "Please Select Address",
      options: addresses?.map((address) => ({
        label: `${address?.street}, ${address?.street2}, ${address?.city}, ${address?.state} - (${address?.zip_code})`,
        value: address?.id,
      })),
      label: "Mailing Address",
      isRequired: false,
    },

    {
      name: "is_same_as_physical",
      type: "checkbox",
      placeholder: "Is Same as Physical?",
    },
    {
      name: "is_1099_required",
      type: "checkbox",
      placeholder: "Is 1099 Required?",
    },
    { name: "is_active", type: "checkbox", placeholder: "Is Active" },
  ];

  const { generateSchema } = useGenerateEntitySchema();

  const customerSchema = generateSchema(customerFormFields);

  const customerSchemaGroups = ["Contact"];

  return {
    customerFormFields,
    customerSchema,
    customerSchemaGroups,
  };
};
