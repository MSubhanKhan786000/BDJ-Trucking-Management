import { Controller } from "react-hook-form";
import { CustomInput, FormGroup, Input, Label } from "reactstrap";
import Select from "react-select";
import { ExtendedErrorMessage } from "../../views/forms/utils/ExtendedErrorMessage";
import React from "react";
import ReactDatetime from "react-datetime";
import { useFormState } from "./form-context/useFormState";

export const CustomFormGroup = ({
  register,
  formField,
  index,
  control,
  errors,
  initialValue,
}) => {
  const { setUsaState } = useFormState();
  return (
    <FormGroup key={index}>
      {formField.type === "select" ? (
        <Controller
          name={formField.name}
          control={control}
          defaultValue={
            typeof initialValue?.[formField?.name] === "object"
              ? initialValue?.[formField?.name]?.id
              : initialValue?.[formField?.name]
          }
          render={({ field }) => (
            <div class="custom-input-select">
              <Label>
                {formField.label} :
                {formField.isRequired && (
                  <span style={{ color: "red" }}> *</span>
                )}
              </Label>
              <Select
                className="react-select info"
                classNamePrefix="react-select"
                options={formField.options}
                placeholder={formField.placeholder}
                isSearchable
                onChange={(selectedOption) => {
                  field?.onChange?.(selectedOption?.value);
                  if (formField?.name === "state") {
                    setUsaState(selectedOption?.value);
                  }
                }}
                selected={field.value}
                defaultValue={formField?.options?.find((option) =>
                  typeof initialValue?.[formField?.name] === "object"
                    ? initialValue?.[formField?.name]?.id
                    : initialValue?.[formField?.name]
                )}
              />
            </div>
          )}
        />
      ) : formField.type === "checkbox" ? (
        <CustomInput
          type="switch"
          id={formField.name}
          name={formField.name}
          label={formField.placeholder}
          defaultChecked={initialValue?.[formField?.name]}
          {...register(formField.name)}
        />
      ) : formField.type === "date" || formField.type === "datetime" ? (
        <>
          <Label>
            {formField.label} :
            {formField.isRequired && <span style={{ color: "red" }}> *</span>}
          </Label>
          <Controller
            name={formField.name}
            control={control}
            defaultValue={initialValue?.[formField?.name]}
            render={({ field }) => (
              <ReactDatetime
                timeFormat={formField.type !== "date"}
                inputProps={{
                  className: "form-control",
                  placeholder: formField.placeholder,
                }}
                onChange={(value) => {
                  field.onChange(value);
                }}
                value={field.value}
              />
            )}
          />
        </>
      ) : (
        <div class="custom-input-select">
          <Label>
            {formField.label} :
            {formField.isRequired && <span style={{ color: "red" }}> *</span>}
          </Label>
          <Input
            class="custom-input-text"
            placeholder={formField.placeholder}
            type={formField.type}
            name={formField.name}
            id={formField.name}
            autoComplete="off"
            defaultValue={initialValue?.[formField?.name]}
            {...register(formField.name)}
          />
        </div>
      )}
      {errors[formField.name] && (
        <ExtendedErrorMessage errors={errors} field={formField.name} />
      )}
    </FormGroup>
  );
};
