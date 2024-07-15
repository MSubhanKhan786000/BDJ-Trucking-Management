import { useGenerateEntitySchema } from "utils/forms/useGenerateEntitySchema";
import { statesData } from "utils/defaultConfig/statesData";

export const useGetDriverMetaData = () => {
  const basePayRates = [
    { label: "Hourly", value: "hourly" },
    { label: "Daily", value: "daily" },
    { label: "Weekly", value: "weekly" },
    { label: "Monthly", value: "monthly" },
  ];

  const driverFormFields = [
    {
      name: "first_name",
      type: "text",
      placeholder: "Enter First Name",
      label: "First Name",
      isRequired: true,
      group: "Personal Info",
    },
    {
      name: "middle_name",
      type: "text",
      placeholder: "Enter Middle Name",
      label: "Middle Name",
      isRequired: false,
      group: "Personal Info",
    },
    {
      name: "last_name",
      type: "text",
      placeholder: "Enter Last Name",
      label: "Last Name",
      isRequired: true,
      group: "Personal Info",
    },
    {
      name: "display_name",
      type: "text",
      placeholder: "Enter Display Name",
      label: "Display Name",
      isRequired: false,
      group: "Personal Info",
    },
    {
      name: "date_of_birth",
      type: "date",
      placeholder: "Select DOB",
      label: "Date of Birth",
      isRequired: true,
      group: "Personal Info",
    },
    {
      name: "ssn_number",
      type: "number",
      placeholder: "Enter SSN",
      label: "SSN",
      isRequired: true,
      group: "Personal Info",
    },
    {
      name: "fein_number",
      type: "number",
      placeholder: "Enter FEIN",
      label: "FEIN",
      isRequired: true,
      group: "Personal Info",
    },
    {
      name: "bank_accounting_number",
      type: "number",
      placeholder: "Enter Bank Account Number",
      label: "Bank Account",
      isRequired: true,
      group: "Personal Info",
    },
    {
      name: "bank_routing_number",
      type: "number",
      placeholder: "Enter Bank Routing Number",
      label: "Bank Routing",
      isRequired: true,
      group: "Personal Info",
    },
    {
      name: "home_phone",
      type: "number",
      placeholder: "Enter Home Phone",
      label: "Home Phone",
      isRequired: false,
      group: "Contact",
    },
    {
      name: "cell_phone",
      type: "number",
      placeholder: "Enter Cell Phone",
      label: "Cell Phone",
      isRequired: true,
      group: "Contact",
    },
    {
      name: "email",
      type: "email",
      placeholder: "Enter Email",
      label: "E-mail",
      isRequired: true,
      group: "Contact",
    },
    {
      name: "emergency_contact",
      type: "text",
      placeholder: "Enter Emergency Contact Name",
      label: "Emergency Contact Name",
      isRequired: true,
      group: "Contact",
    },
    {
      name: "emergency_phone",
      type: "text",
      placeholder: "Enter Emergency Contact Phone",
      label: "Emergency Contact Phone",
      isRequired: true,
      group: "Contact",
    },
    {
      name: "emergency_relationship",
      type: "text",
      placeholder: "Enter Emergency Contact Relation",
      label: "Emergency Contact Relation",
      isRequired: true,
      group: "Contact",
    },
    {
      name: "medical_card_expiration_date",
      type: "date",
      placeholder: "Select Medical Card Expiration Date",
      label: "Medical Card Expiration Date",
      isRequired: true,
      group: "Safety",
    },
    {
      name: "twic_expiration_date",
      type: "date",
      placeholder: "Select TWIC Expiration Date",
      label: "TWIC Expiration Date",
      isRequired: true,
      group: "Safety",
    },
    {
      name: "pre_employment_mvr_date",
      type: "date",
      placeholder: "Select Pre-employment MVR Date",
      label: "Pre-employment MVR Date",
      isRequired: false,
      group: "Safety",
    },
    {
      name: "pre_employment_clearing_house_date",
      type: "date",
      placeholder: "Select Pre-employment Clearing House Date",
      label: "Pre-employment Clearing House Date",
      isRequired: false,
      group: "Safety",
    },
    {
      name: "custom_warning",
      type: "text",
      placeholder: "Enter Custom Warning",
      label: "Custom Warning",
      isRequired: false,
      group: "Safety",
    },
    {
      name: "logbook_last_received",
      type: "date",
      placeholder: "Select Logbook Last Received",
      label: "Logbook Last Received",
      isRequired: false,
      group: "Safety",
    },
    {
      name: "fuel_card_number",
      type: "number",
      placeholder: "Enter Fuel Card Number",
      label: "Fuel Card Number",
      isRequired: false,
      group: "Safety",
    },
    {
      name: "ipass_number",
      type: "text",
      placeholder: "Enter IPass Number",
      label: "IPass Number",
      isRequired: false,
      group: "Safety",
    },
    {
      name: "best_pass_number",
      type: "text",
      placeholder: "Enter Best Pass Number",
      label: "Best Pass Number",
      isRequired: false,
      group: "Safety",
    },
    {
      name: "pre_pass_ez_pass_number",
      type: "text",
      placeholder: "Enter Pre Pass Ex Pass Number",
      label: "Pre Pass Ex Pass Number",
      isRequired: false,
      group: "Safety",
    },
    {
      name: "escrow_starting_balance",
      type: "number",
      placeholder: "Enter Escrow Starting Balance",
      label: "Escrow Starting Balance",
      isRequired: true,
      group: "Safety",
    },
    {
      name: "hire_date",
      type: "date",
      placeholder: "Select Hire Date",
      label: "Hire Date",
      isRequired: true,
      group: "General",
    },
    {
      name: "termination_date",
      type: "date",
      placeholder: "Select Termination Date",
      label: "Termination Date",
      isRequired: false,
      group: "General",
    },
    {
      name: "driver_personal_id",
      type: "text",
      placeholder: "Enter Driver Personal ID",
      label: "Driver Personal ID",
      isRequired: true,
      group: "General",
    },
    {
      name: "dispatch_category",
      type: "text",
      placeholder: "Enter Dispatch Category",
      label: "Dispatch Category",
      isRequired: true,
      group: "General",
    },
    {
      name: "division",
      type: "text",
      placeholder: "Enter Division",
      label: "Division",
      isRequired: true,
      group: "General",
    },
    {
      name: "cdl_number",
      type: "text",
      placeholder: "Enter CDL Number",
      label: "CDL Number",
      isRequired: true,
      group: "CDL Info",
    },
    {
      name: "cdl_state",
      type: "text",
      placeholder: "Enter CDL State",
      label: "CDL State",
      isRequired: true,
      group: "CDL Info",
    },
    {
      name: "cdl_expiration_date",
      type: "date",
      placeholder: "Select CDL Expiration Date",
      label: "CDL Expiration Date",
      isRequired: true,
      group: "CDL Info",
    },
    {
      name: "cdl_class",
      type: "text",
      placeholder: "Enter CDL Class",
      label: "CDL Class",
      isRequired: true,
      group: "CDL Info",
    },
    {
      name: "cdl_endorsement_date",
      type: "date",
      placeholder: "Select CDL Endorsement Date",
      label: "CDL Endorsement Date",
      isRequired: true,
      group: "CDL Info",
    },
    {
      name: "years_of_experience",
      type: "number",
      placeholder: "Enter Years of Experience",
      label: "Years of Experience",
      isRequired: true,
      group: "CDL Info",
    },
    {
      name: "states_operated",
      type: "text",
      placeholder: "Enter States Operated",
      label: "States Operated",
      isRequired: true,
      group: "CDL Info",
    },
    {
      name: "safe_driving_awards",
      type: "text",
      placeholder: "Enter Safe Driving Awards",
      label: "Safe Driving Awards",
      isRequired: false,
      group: "CDL Info",
    },
    {
      name: "special_training",
      type: "text",
      placeholder: "Enter Special Training",
      label: "Safe Driving Awards",
      isRequired: false,
      group: "CDL Info",
    },
    {
      name: "payrate_date",
      type: "date",
      placeholder: "Select Pay Date",
      label: "Pay Day",
      isRequired: false,
      group: "Pay",
    },
    {
      name: "base_payrate",
      type: "select",
      placeholder: "Select Base Pay Rate",
      label: "Base Pay Rate",
      options: basePayRates,
      isRequired: false,
      group: "Pay",
    },
    {
      name: "overtime_payrate",
      type: "number",
      placeholder: "Enter Overtime Pay Rate",
      label: "Overtime Pay Rate",
      isRequired: false,
      group: "Pay",
    },
    {
      name: "bonuses",
      type: "number",
      placeholder: "Enter Bonuses",
      label: "Overtime Pay Rate",
      isRequired: false,
      group: "Pay",
    },
    {
      name: "total_earnings",
      type: "number",
      placeholder: "Enter Total Earnings",
      label: "Total Earnings",
      isRequired: false,
      group: "Pay",
    },
    {
      name: "location",
      type: "text",
      placeholder: "Enter Location",
      label: "Location",
      isRequired: true,
      group: "Address",
    },
    {
      name: "street",
      type: "text",
      placeholder: "Enter Street",
      label: "Street",
      isRequired: true,
      group: "Address",
    },
    {
      name: "street2",
      type: "text",
      placeholder: "Enter Street 2",
      label: "Street 2",
      isRequired: false,
      group: "Address",
    },
    {
      name: "city",
      type: "text",
      placeholder: "Enter City",
      label: "City",
      // options: cities?.map((city) => ({
      //   label: city?.name,
      //   value: city?.name,
      // })),
      isRequired: true,
      group: "Address",
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
      group: "Address",
    },
    {
      name: "zip_code",
      type: "text",
      placeholder: "Enter Zip Code",
      label: "Zip Code",
      isRequired: true,
      group: "Address",
    },

    {
      name: "additional_notes",
      type: "text",
      placeholder: "Enter Additional Notes",
      label: "Additional Notes",
      isRequired: false,
      group: "General",
    },
    {
      name: "status",
      type: "text",
      placeholder: "Enter Status",
      label: "Status",
      isRequired: true,
      group: "General",
    },
    {
      name: "eld_enabled",
      type: "checkbox",
      placeholder: "ELD Enabled?",
    },
    {
      name: "deduct_pass",
      type: "checkbox",
      placeholder: "Deduct Pass?",
    },
    {
      name: "deduct_fuel",
      type: "checkbox",
      placeholder: "Deduct Fuel?",
    },
    {
      name: "pre_employment_drug_test",
      type: "checkbox",
      placeholder: "Pre-employment Drug Test",
    },
    {
      name: "send_emails",
      type: "checkbox",
      placeholder: "Send Email?",
      group: "Contact",
    },
    {
      name: "send_text_messages",
      type: "checkbox",
      placeholder: "Send Text Messages",
      group: "Contact",
    },
    {
      name: "is_active",
      type: "checkbox",
      placeholder: "Is Active",
    },
  ];

  const { generateSchema } = useGenerateEntitySchema();

  const driverSchema = generateSchema(driverFormFields);

  // const transformEmptyStringToNull = (value, originalValue) => {
  //   return originalValue === "" ? null : value;
  // };

  // const driverSchema = object().shape({
  //   is_active: boolean(),
  //   is_deleted: boolean(),
  //   first_name: string().required(),
  //   middle_name: string(),
  //   last_name: string().required(),
  //   display_name: string(),
  //   date_of_birth: date().transform(transformEmptyStringToNull).required(),
  //   ssn_number: number()
  //     .typeError("SSN Number must be a valid Number")
  //     .min(1, "SSN Number must be greater than or equal to zero")
  //     .required(),
  //   fein_number: number()
  //     .typeError("FEIN Number must be a valid Number")
  //     .min(1, "FEIN Number must be greater than or equal to zero")
  //     .required(),
  //   bank_accounting_number: number()
  //     .typeError("Bank Account Number must be a valid Number")
  //     .min(1, "Bank Account Number must be greater than or equal to zero")
  //     .required(),
  //   bank_routing_number: number()
  //     .typeError("Bank Routing Number must be a valid Number")
  //     .min(1, "Bank Routing Number must be greater than or equal to zero")
  //     .required(),
  //   home_phone: number()
  //     .typeError("Home Phone must be a valid Number")
  //     .min(0, "Home Phone must be greater than or equal to zero")
  //     .transform((value, originalValue) =>
  //       originalValue === "" ? 0 : value
  //     ),
  //   cell_phone: number()
  //     .typeError("Cell Phone must be a valid Number")
  //     .min(1, "Cell Phone must be greater than or equal to zero")
  //     .required(),
  //   email: string().required(),
  //   emergency_contact: string().required(),
  //   emergency_phone: number()
  //     .typeError("Emergency Phone must be a valid Number")
  //     .min(1, "Emergency Phone must be greater than or equal to zero")
  //     .required(),
  //   emergency_relationship: string().required(),
  //   medical_card_expiration_date: date()
  //     .transform(transformEmptyStringToNull)
  //     .required(),
  //   pre_employment_mvr_date: date()
  //     .transform(transformEmptyStringToNull)
  //     .nullable(),
  //   pre_employment_clearing_house_date: date()
  //     .transform(transformEmptyStringToNull)
  //     .nullable(),
  //   twic_expiration_date: date()
  //     .transform(transformEmptyStringToNull)
  //     .required(),
  //   custom_warning: string(),
  //   logbook_last_received: date()
  //     .transform(transformEmptyStringToNull)
  //     .nullable(),
  //   fuel_card_number: number()
  //     .typeError("Fuel Card Number must be a valid Number")
  //     .min(0, "Fuel Card Number must be greater than or equal to zero")
  //     .transform((value, originalValue) =>
  //       originalValue === "" ? 0 : value
  //     ),
  //   ipass_number: string(),
  //   best_pass_number: string(),
  //   pre_pass_ez_pass_number: string(),
  //   escrow_starting_balance: number()
  //     .typeError("Escrow Starting Balance must be a valid Number")
  //     .min(1, "Escrow Starting Balance must be greater than or equal to zero")
  //     .required(),
  //   hire_date: date().transform(transformEmptyStringToNull).required(),
  //   termination_date: date().transform(transformEmptyStringToNull).nullable(),
  //   driver_personal_id: number()
  //     .typeError("Driver Personal Id must be a valid Number")
  //     .min(1, "Driver Personal Id must be greater than or equal to zero")
  //     .required(),
  //   dispatch_category: string().required(),
  //   division: string().required(),
  //   cdl_number: string().required(),
  //   cdl_state: string().required(),
  //   cdl_expiration_date: date()
  //     .transform(transformEmptyStringToNull)
  //     .required(),
  //   cdl_class: string().required(),
  //   cdl_endorsement_date: date()
  //     .transform(transformEmptyStringToNull)
  //     .required(),
  //   years_of_experience: number()
  //     .typeError("Years of Experience must be a valid Number")
  //     .min(1, "Years of Experience must be greater than or equal to zero")
  //     .required(),
  //   states_operated: string().required(),
  //   safe_driving_awards: string(),
  //   special_training: string(),
  //   payrate_date: date().transform(transformEmptyStringToNull).nullable(),
  //   base_payrate: string(),
  //   overtime_payrate: number()
  //     .typeError("Overtime Payrate must be a valid Number")
  //     .min(0, "Overtime Payrate must be greater than or equal to zero")
  //     .transform((value, originalValue) =>
  //       originalValue === "" ? 0 : value
  //     ),
  //   bonuses: number()
  //     .typeError("Bonuses must be a valid Number")
  //     .min(0, "Bonuses must be greater than or equal to zero")
  //     .transform((value, originalValue) =>
  //       originalValue === "" ? 0 : value
  //     ),
  //   total_earnings: number()
  //     .typeError("Total Earnings must be a valid Number")
  //     .min(0, "Total Earnings must be greater than or equal to zero")
  //     .transform((value, originalValue) =>
  //       originalValue === "" ? 0 : value
  //     ),
  //   location: string().required(),
  //   street: string().required(),
  //   street2: string(),
  //   city: string().required(),
  //   state: string().required(),
  //   zip_code: number()
  //     .typeError("Zip Code must be a valid Number")
  //     .min(1, "Zip Code must be greater than or equal to zero")
  //     .required(),
  //   additional_notes: string(),
  //   status: string(),
  //   eld_enabled: boolean(),
  //   deduct_pass: boolean(),
  //   deduct_fuel: boolean(),
  //   pre_employment_drug_test: boolean(),
  //   send_emails: boolean(),
  //   send_text_messages: boolean(),
  // });
  const driverSchemaGroups = [
    "Personal Info",
    "Address",
    "Contact",
    "Safety",
    "General",
    "CDL Info",
    "Pay",
  ];

  return {
    driverFormFields,
    driverSchema,
    driverSchemaGroups,
  };
};
