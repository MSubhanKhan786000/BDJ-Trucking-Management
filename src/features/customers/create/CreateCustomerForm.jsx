import React from "react";
import {useCreateCustomerForm} from "./useCreateCustomerForm";
import {useGetCustomerMetaData} from "../metadata/useGetCustomerMetaData";
import {CreateEntityForm} from "../../../components/Forms/CreateEntityForm";

export const CreateCustomerForm = () => {
    const {onSubmit, register, handleSubmit, control, isLoading, errors} =
        useCreateCustomerForm();

    const {customerFormFields, customerSchemaGroups} = useGetCustomerMetaData();

    return (
        <>
            {!isLoading && (
                <div className="content">
                    <CreateEntityForm
                        entityName={"Customer"}
                        formFields={customerFormFields}
                        schemaGroups={customerSchemaGroups}
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
