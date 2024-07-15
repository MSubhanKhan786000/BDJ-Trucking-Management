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
    CustomInput, Label,
} from "reactstrap";
import {useCreateUserForm} from "./useCreateUserForm";
import Select from "react-select";
import {useGetUserMetaData} from "../metadata/useGetUserMetaData";
import {Controller} from "react-hook-form";
import {ExtendedErrorMessage} from "views/forms/utils/ExtendedErrorMessage";
import {CreateEntityForm} from "../../../components/Forms/CreateEntityForm";

export const CreateUserForm = () => {
    const {onSubmit, register, handleSubmit, control, isLoading, errors} =
        useCreateUserForm();

    const {userFormFields, userSchemaGroups} = useGetUserMetaData();

    const textAndNumberFields = userFormFields.filter(
        (formField) => formField.type === "text" || formField.type === "number" || formField.type === "email"
    );
    const selectAndCheckboxFields = userFormFields.filter(
        (formField) => formField.type === "select" || formField.type === "checkbox"
    );

    return (
        <>
            {!isLoading && (
                <div className="content">
                    {/*<Container>*/}
                    {/*    <Row>*/}
                    {/*        <Col lg="12" md="12">*/}
                    {/*            <Form onSubmit={handleSubmit(onSubmit)}>*/}
                    {/*                <Card>*/}
                    {/*                    <CardHeader>*/}
                    {/*                        <CardTitle tag="h4">Create User</CardTitle>*/}
                    {/*                    </CardHeader>*/}
                    {/*                    <CardBody>*/}
                    {/*                        {textAndNumberFields.map((formField, index) => (*/}
                    {/*                            <FormGroup key={index}>*/}
                    {/*                                <Label>*/}
                    {/*                                    {formField.label} :*/}
                    {/*                                    {formField.isRequired && (*/}
                    {/*                                        <span style={{color: "red"}}> *</span>*/}
                    {/*                                    )}*/}
                    {/*                                </Label>*/}
                    {/*                                <Input*/}
                    {/*                                    class="custom-input-text"*/}
                    {/*                                    placeholder={formField.placeholder}*/}
                    {/*                                    type={formField.type}*/}
                    {/*                                    name={formField.name}*/}
                    {/*                                    autoComplete="off"*/}
                    {/*                                    {...register(formField.name)}*/}
                    {/*                                />*/}

                    {/*                                {errors[formField.name] && (*/}
                    {/*                                    <ExtendedErrorMessage*/}
                    {/*                                        errors={errors}*/}
                    {/*                                        field={formField.name}*/}
                    {/*                                    />*/}
                    {/*                                )}*/}
                    {/*                            </FormGroup>*/}
                    {/*                        ))}*/}
                    {/*                    </CardBody>*/}
                    {/*                </Card>*/}
                    {/*                <Card>*/}
                    {/*                    <CardBody>*/}
                    {/*                        {selectAndCheckboxFields.map((formField, index) => (*/}
                    {/*                            <FormGroup key={index}>*/}
                    {/*                                {formField.type === "select" ? (*/}
                    {/*                                    <Controller*/}
                    {/*                                        name={formField.name}*/}
                    {/*                                        control={control}*/}
                    {/*                                        render={({field}) => (*/}
                    {/*                                            <div class="custom-input-select">*/}
                    {/*                                                <Label>*/}
                    {/*                                                    {formField.label} :*/}
                    {/*                                                    {formField.isRequired && (*/}
                    {/*                                                        <span style={{color: "red"}}> *</span>*/}
                    {/*                                                    )}*/}
                    {/*                                                </Label>*/}
                    {/*                                                <Select*/}
                    {/*                                                    className="react-select info"*/}
                    {/*                                                    classNamePrefix="react-select"*/}
                    {/*                                                    options={formField.options}*/}
                    {/*                                                    placeholder={formField.placeholder}*/}
                    {/*                                                    isSearchable*/}
                    {/*                                                    onChange={(selectedOption) => {*/}
                    {/*                                                        field?.onChange?.(selectedOption?.value);*/}
                    {/*                                                    }}*/}
                    {/*                                                    selected={field?.value}*/}
                    {/*                                                />*/}
                    {/*                                            </div>*/}
                    {/*                                        )}*/}
                    {/*                                    />*/}
                    {/*                                ) : (*/}
                    {/*                                    <CustomInput*/}
                    {/*                                        type="switch"*/}
                    {/*                                        id={formField.name}*/}
                    {/*                                        name={formField.name}*/}
                    {/*                                        label={formField.placeholder}*/}
                    {/*                                        defaultChecked={formField.name === "is_active"}*/}
                    {/*                                        {...register(formField.name)}*/}
                    {/*                                    />*/}
                    {/*                                )}*/}
                    {/*                                {errors[formField.name] && (*/}
                    {/*                                    <ExtendedErrorMessage*/}
                    {/*                                        errors={errors}*/}
                    {/*                                        field={formField.name}*/}
                    {/*                                    />*/}
                    {/*                                )}*/}
                    {/*                            </FormGroup>*/}
                    {/*                        ))}*/}
                    {/*                    </CardBody>*/}
                    {/*                </Card>*/}

                    {/*                <div*/}
                    {/*                    style={{*/}
                    {/*                        display: "flex",*/}
                    {/*                        alignItems: "center",*/}
                    {/*                        justifyContent: "flex-end",*/}
                    {/*                    }}*/}
                    {/*                >*/}
                    {/*                    <Button type="submit" color="info">*/}
                    {/*                        Create*/}
                    {/*                    </Button>*/}
                    {/*                </div>*/}
                    {/*            </Form>*/}
                    {/*        </Col>*/}
                    {/*    </Row>*/}
                    {/*</Container>*/}

                    <CreateEntityForm
                        entityName={"User"}
                        formFields={userFormFields}
                        schemaGroups={userSchemaGroups}
                        onSubmit={onSubmit}
                        register={register}
                        handleSubmit={handleSubmit}
                        control={control}
                        errors={errors}
                        filesUploadFlag={false}
                    />
                </div>
            )}
        </>
    );
};
