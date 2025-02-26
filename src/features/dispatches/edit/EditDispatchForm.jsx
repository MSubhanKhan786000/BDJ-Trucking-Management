import React from "react";
import {
  Button,
  Form,
  Input,
  FormGroup,
  Container,
  Col,
  Row,
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  CustomInput,
  Label,
} from "reactstrap";
import { useEditDispatchForm } from "./useEditDispatchForm";
import { Controller } from "react-hook-form";
import Select from "react-select";
import { ExtendedErrorMessage } from "views/forms/utils/ExtendedErrorMessage";
import { ExtendedErrorAlert } from "views/forms/utils/ExtendedErrorAlert";

export const EditDispatchForm = () => {
  const {
    onSubmit,
    register,
    handleSubmit,
    control,
    isLoading,
    errors,
    dispatch,
    dispatchFormFields,
    notificationAlertRef,
  } = useEditDispatchForm();

  const textAndNumberFields = dispatchFormFields.filter(
    (formField) => formField.type === "text" || formField.type === "number"
  );
  const selectAndCheckboxFields = dispatchFormFields.filter(
    (formField) => formField.type === "select" || formField.type === "checkbox"
  );
  return (
    <>
      {!isLoading && dispatch && Object.keys(dispatch).length > 0 && (
        <div className="content">
          <Container>
            <Row>
              <Col lg="12" md="12">
                <Form onSubmit={handleSubmit(onSubmit)}>
                  <Card>
                    <CardHeader>
                      <CardTitle tag="h4">Update Dispatch</CardTitle>
                    </CardHeader>
                    <CardBody>
                      {textAndNumberFields.map((formField, index) => (
                        <FormGroup key={index}>
                          <Label>
                            {formField.label} :
                            {formField.isRequired && (
                              <span style={{ color: "red" }}> *</span>
                            )}
                          </Label>
                          <Input
                            class="custom-input-text"
                            placeholder={formField.placeholder}
                            type={formField.type}
                            name={formField.name}
                            autoComplete="off"
                            defaultValue={dispatch?.[formField?.name]}
                            {...register(formField?.name)}
                          />
                          {errors[formField.name] && (
                            <ExtendedErrorMessage
                              errors={errors}
                              field={formField.name}
                            />
                          )}
                        </FormGroup>
                      ))}
                    </CardBody>
                  </Card>
                  <Card>
                    <CardBody>
                      {selectAndCheckboxFields.map((formField, index) => (
                        <FormGroup key={index}>
                          {formField.type === "select" ? (
                            <Controller
                              name={formField?.name}
                              control={control}
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
                                    }}
                                    selected={field?.value}
                                    defaultValue={formField?.options?.find(
                                      (option) =>
                                        typeof dispatch?.[formField?.name] ===
                                        "object"
                                          ? option?.value ===
                                            dispatch?.[formField?.name]?.id
                                          : option?.value ===
                                            dispatch?.[formField?.name]
                                    )}
                                  />
                                </div>
                              )}
                            />
                          ) : (
                            <CustomInput
                              type="switch"
                              id={formField.name}
                              name={formField.name}
                              label={formField.placeholder}
                              defaultChecked={dispatch?.[formField?.name]}
                              {...register(formField?.name)}
                            />
                          )}
                          {errors[formField.name] && (
                            <ExtendedErrorMessage
                              errors={errors}
                              field={formField.name}
                            />
                          )}
                        </FormGroup>
                      ))}
                    </CardBody>
                  </Card>

                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "flex-end",
                    }}
                  >
                    <Button type="submit" color="info">
                      Update
                    </Button>
                  </div>
                </Form>
              </Col>
            </Row>
          </Container>
        </div>
      )}
    </>
  );
};
