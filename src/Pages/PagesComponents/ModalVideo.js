import React from "react";
import Modal from "react-bootstrap/Modal";

const ModalVideo = (props) => {
  const handleClose = () => {
    props.hideModal(false);
  };

  return (
    <>
      <Modal size="lg" show={props.showModal} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>Company Introduction</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <iframe
            width="770"
            height="515"
            src="https://www.youtube.com/embed/pjNI9K1D_xo"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; clipboard-write; encrypted-media; gyroscope;"
            loading="eager"
          ></iframe>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default ModalVideo;
