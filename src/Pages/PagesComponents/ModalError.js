import React from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

function ModalError(props) {
  const handleClose = () => {
    props.closeModal(false);
  };

  return (
    <>
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        show={props.submitCheck}
        onHide={handleClose}
        animation={false}
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Wrong Logins!
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Please check your logins again!
          <br />
          (Hint: username is <b>Admin</b> and password ends with <b>123</b>)
        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ModalError;
