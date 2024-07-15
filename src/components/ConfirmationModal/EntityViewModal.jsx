import React, { useEffect } from "react";
import {
  Card,
  CardBody,
  CustomInput,
  FormGroup,
  Input,
  Label,
  Modal,
  ModalBody,
} from "reactstrap";
import ReactDatetime from "react-datetime";
import { useMultiImageUpload } from "components/CustomUpload/useMultiImageUpload";
import { MultiImageUpload } from "components/CustomUpload/MultiImageUpload";

export const EntityViewModal = (props) => {
  const {
    formfields,
    isOpen,
    toggle,
    resourceType,
    getAllDocuments,
    documents,
    initialValue,
    entityId,
    isLoading,
  } = props;

  useEffect(() => {
    if (entityId && getAllDocuments) getAllDocuments();
  }, [entityId, getAllDocuments]);

  const {
    imagePreviewUrl,
    setImagePreviewUrl,
    attachedFiles,
    setAttachedFiles,
    previousAttachedFiles,
    setPreviousAttachedFiles,
  } = useMultiImageUpload();

  useEffect(() => {
    if (!isLoading) {
      setPreviousAttachedFiles(documents);
    } else {
      setPreviousAttachedFiles([]);
      setImagePreviewUrl([]);
    }
  }, [documents, isLoading, setImagePreviewUrl, setPreviousAttachedFiles]);

  return (
    <Modal
      isOpen={isOpen}
      toggle={() => {
        setPreviousAttachedFiles([]);
        toggle();
      }}
      modalClassName="modal-long"
      className="custom-modal-dialog"
      size="xl"
    >
      <div className="modal-header">
        <h5 className="modal-title">{resourceType} View</h5>
        <button
          type="button"
          className="close"
          data-dismiss="modal"
          aria-label="Close"
          onClick={toggle}
        >
          <span aria-hidden="true">×</span>
        </button>
      </div>
      <ModalBody>
        {formfields?.map((formField, index) => (
          <FormGroup key={index}>
            {formField.type === "select" ? (
              <div class="custom-input-select">
                <Label>
                  {formField.label} :
                  {formField.isRequired && (
                    <span style={{ color: "red" }}> *</span>
                  )}
                </Label>
                <Input
                  class="custom-input-text"
                  placeholder={formField.placeholder}
                  name={formField.name}
                  autoComplete="off"
                  defaultValue={initialValue?.[formField?.name].location}
                  disabled={true}
                />
              </div>
            ) : formField.type === "checkbox" ? (
              <CustomInput
                type="switch"
                id={formField.name}
                name={formField.name}
                label={formField.placeholder}
                defaultChecked={initialValue?.[formField?.name]}
                disabled
              />
            ) : formField.type === "date" || formField.type === "datetime" ? (
              <>
                <Label>
                  {formField.label} :
                  {formField.isRequired && (
                    <span style={{ color: "red" }}> *</span>
                  )}
                </Label>
                <ReactDatetime
                  timeFormat={true}
                  value={initialValue?.[formField?.name]}
                  inputProps={{
                    className: "form-control",
                    placeholder: formField.placeholder,
                    disabled: true,
                  }}
                />
              </>
            ) : (
              <div class="custom-input-select">
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
                  value={initialValue?.[formField?.name]}
                  disabled={true}
                />
              </div>
            )}
          </FormGroup>
        ))}
        {documents?.length > 0 && (
          <Card>
            <CardBody>
              <MultiImageUpload
                imagePreviewUrl={imagePreviewUrl}
                setImagePreviewUrl={setImagePreviewUrl}
                attachedFiles={attachedFiles}
                setAttachedFiles={setAttachedFiles}
                previousAttachedFiles={previousAttachedFiles}
                setPreviousAttachedFiles={setPreviousAttachedFiles}
                allowUpload={false}
              />
            </CardBody>
          </Card>
        )}
      </ModalBody>
    </Modal>
  );
};
