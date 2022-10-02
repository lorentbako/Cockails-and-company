import React, { useState } from "react";
import LoginForm from "./PagesComponents/LoginForm";
import ModalError from "./PagesComponents/ModalError";

const Login = () => {
  const [modalCheck, setModalCheck] = useState(false);

  const closeModalHandler = () => {
    setModalCheck(false);
  };

  const openModalHandler = () => {
    setModalCheck(true);
  };

  return (
    <div className="login-page">
      <LoginForm className="login-form" showModal={openModalHandler} />
      <ModalError submitCheck={modalCheck} closeModal={closeModalHandler} />
    </div>
  );
};

export default Login;
