import React, { useState } from "react";
import LoginForm from "./PagesComponents/LoginForm";
import ModalError from "./PagesComponents/ModalError";

const Login = () => {
  const [modalCheck, setModalCheck] = useState(false);
  /*
  const closeModalHandler = () => {
    setModalCheck(false);
  };
  const openModalHandler = () => {
    setModalCheck(true);
  };
  */
  const invertModalState = () => {
    setModalCheck(!modalCheck);
  };

  return (
    <div className="login-page">
      <LoginForm className="login-form" showModal={invertModalState} />
      <ModalError submitCheck={modalCheck} closeModal={invertModalState} />
    </div>
  );
};

export default Login;
