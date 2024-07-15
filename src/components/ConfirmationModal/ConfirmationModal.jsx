import React from "react";
import { Button, Modal, ModalBody, ModalFooter } from "reactstrap";

export const ConfirmationModal = (props) => {
  const { isOpen, toggle, onConfirm, resourceType } = props;
  return (
    <Modal isOpen={isOpen} toggle={toggle}>
      <div className="modal-header">
        <h5 className="modal-title">Confirmation Modal</h5>
      </div>
      <ModalBody>
        <p>{`Are you sure you wan to delete this ${resourceType}`}</p>
      </ModalBody>
      <ModalFooter>
        <Button
          color="secondary"
          onClick={() => {
            toggle();
          }}
        >
          Close
        </Button>
        <Button
          color="primary"
          onClick={async () => {
            await onConfirm();
            toggle();
          }}
        >
          Confirm
        </Button>
      </ModalFooter>
    </Modal>
  );
};
