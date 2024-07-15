import {
  Button,
  Card,
  CardBody,
  CardHeader,
  CardTitle,
  Col,
  Collapse,
  Container,
  Form,
  Row,
} from "reactstrap";
import { MultiImageUpload } from "../CustomUpload/MultiImageUpload";
import React from "react";
import { isNullOrUndef } from "chart.js/helpers";
import { FieldGroupsHandler } from "./fieldGroupsHandler";
import { CustomFormGroup } from "./CustomFormGroup";

export const CreateEntityForm = ({
  entityName,
  formFields,
  schemaGroups,
  onSubmit,
  register,
  handleSubmit,
  control,
  errors,
  filesUploadFlag,
  imagePreviewUrl,
  setImagePreviewUrl,
  attachedFiles,
  setAttachedFiles,
  previousAttachedFiles,
  setPreviousAttachedFiles,
  deleteDocument,
  initialValue,
  mode = "create",
}) => {
  const {
    groupedFields,
    groupStates,
    updateGroupState,
    handleExpandAllGroupState,
    handleCollapseAllGroupState,
  } = FieldGroupsHandler(formFields, schemaGroups);
  const nonGroupedFields = formFields.filter((formField) =>
    isNullOrUndef(formField.group)
  );

  if (mode !== "create" && mode !== "edit") {
    throw new Error('Invalid mode prop: must be "create" or "edit".');
  }

  return (
    <>
      <Container>
        <Row>
          <Col lg="12" md="12">
            <Form onSubmit={handleSubmit(onSubmit)}>
              <Card>
                <CardHeader>
                  <CardTitle tag="h3" className="col-10">
                    {mode === "create"
                      ? `New ${entityName}`
                      : `Update ${entityName}`}
                  </CardTitle>
                </CardHeader>
              </Card>
              {groupedFields.length > 0 && (
                <Card>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "flex-end",
                    }}
                  >
                    <Button color="info" onClick={handleExpandAllGroupState}>
                      Expand All
                    </Button>
                    <Button
                      color="primary"
                      className="btn-simple"
                      onClick={handleCollapseAllGroupState}
                    >
                      Collapse All
                    </Button>
                  </div>
                  <div
                    aria-multiselectable={true}
                    className="card-collapse"
                    id="accordion"
                    role="tablist"
                  >
                    {groupedFields?.map((group) => (
                      <Card className="card-plain">
                        <CardHeader
                          className="collapsable-card-header"
                          role="tab"
                        >
                          <a
                            aria-expanded={groupStates.get(group.key)}
                            href="#pablo"
                            data-parent="#accordion"
                            data-toggle="collapse"
                            onClick={(e) => {
                              e.preventDefault();
                              updateGroupState(group.key);
                            }}
                          >
                            {group.key}
                            <i
                              className="tim-icons icon-minimal-down"
                              // style={{ color: "white" }}
                            />
                          </a>
                        </CardHeader>
                        <Collapse
                          role="tabpanel"
                          isOpen={groupStates.get(group.key)}
                        >
                          <CardBody>
                            <Row>
                              {group.value.map((formField, index) => (
                                <Col lg="6" md="6">
                                  <CustomFormGroup
                                    register={register}
                                    formField={formField}
                                    index={index}
                                    control={control}
                                    errors={errors}
                                    initialValue={initialValue}
                                  />
                                </Col>
                              ))}
                            </Row>
                          </CardBody>
                        </Collapse>
                      </Card>
                    ))}
                  </div>
                </Card>
              )}
              {nonGroupedFields.length > 0 && (
                <Card>
                  <CardBody>
                    {nonGroupedFields.map((formField, index) => (
                      <CustomFormGroup
                        register={register}
                        formField={formField}
                        index={index}
                        control={control}
                        errors={errors}
                        initialValue={initialValue}
                      />
                    ))}
                  </CardBody>
                </Card>
              )}
              {filesUploadFlag && (
                <Card>
                  <CardBody>
                    <MultiImageUpload
                      imagePreviewUrl={imagePreviewUrl}
                      setImagePreviewUrl={setImagePreviewUrl}
                      attachedFiles={attachedFiles}
                      setAttachedFiles={setAttachedFiles}
                      previousAttachedFiles={previousAttachedFiles}
                      setPreviousAttachedFiles={setPreviousAttachedFiles}
                      deleteDocument={deleteDocument}
                    />
                  </CardBody>
                </Card>
              )}

              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "flex-end",
                }}
              >
                <Button type="submit" color="info">
                  {mode === "create" ? "Create" : "Update"}
                </Button>
              </div>
            </Form>
          </Col>
        </Row>
      </Container>
    </>
  );
};
