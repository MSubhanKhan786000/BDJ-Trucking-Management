import * as Yup from "yup";
import { match } from "ts-pattern";

export const useGenerateEntitySchema = () => {
  const transformEmptyStringToNull = (value, originalValue) => {
    return originalValue === "" ? null : value;
  };

  const generateSchema = (formFields) => {
    const schemaFields = formFields.reduce((schema, field) => {
      const fieldSchema = match(field.type)
        .with("text", "email", "select", () => Yup.string())
        .with("number", () =>
          Yup.number()
            .typeError(`${field.label} must be a valid number`)
            .min(0, `${field.label} must be greater than or equal to zero`)
            .transform((value, originalValue) =>
              originalValue === "" ? 0 : value
            )
        )
        .with("date", "datetime", () =>
          Yup.date().transform(transformEmptyStringToNull)
        )
        .with("checkbox", () => Yup.boolean())
        .otherwise(() => Yup.mixed());

      const finalFieldSchema = field.isRequired
        ? fieldSchema.required(`${field.label} is required`)
        : fieldSchema.nullable();

      return { ...schema, [field.name]: finalFieldSchema };
    }, {});

    return Yup.object().shape(schemaFields);
  };

  return { generateSchema };
};
