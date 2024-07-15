import { useGenerateEntitySchema } from "utils/forms/useGenerateEntitySchema";
import { boolean, number, object, string } from "yup";

export const useGetUserMetaData = () => {
  const userRoles = [
    { label: "Dispatch", value: "dispatch" },
    { label: "Accountant", value: "accountant" },
  ];
  const userFormFields = [
    {
      name: "email",
      type: "email",
      placeholder: "Enter email",
      label: "E-mail",
      isRequired: true,
    },
    {
      name: "username",
      type: "text",
      placeholder: "Enter Username",
      label: "Username",
      isRequired: true,
    },
    {
      name: "password",
      type: "text",
      placeholder: "Enter Password",
      label: "Password",
      isRequired: true,
    },
    {
      name: "role",
      type: "select",
      placeholder: "Select User Role",
      label: "User Role",
      isRequired: true,
      options: userRoles,
    },
    // { name: "is_deleted", type: "checkbox", placeholder: "Is Deleted" },
    { name: "is_active", type: "checkbox", placeholder: "Is Active" },
  ];

  const { generateSchema } = useGenerateEntitySchema();

  const userSchema = generateSchema(userFormFields);

  //   const userSchema = object().shape({
  //     is_active: boolean(),
  //     is_deleted: boolean(),
  //     email: string(),
  //     username: string(),
  //     password: string(),
  //   });
  const userSchemaGroups = [];

  return {
    userFormFields,
    userSchema,
    userSchemaGroups,
  };
};
