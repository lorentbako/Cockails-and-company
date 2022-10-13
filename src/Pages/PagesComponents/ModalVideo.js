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
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default ModalVideo;
