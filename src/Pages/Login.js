import React, { useState } from "react";
import LoginForm from "./PagesComponents/Login/LoginForm";
import ModalError from "./PagesComponents/Login/ModalError";

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
  const invertModalState = (event) => {
    console.log(event);
    setModalCheck(event);
  };

  return (
    <div className="login-page">
      <LoginForm className="login-form" showModal={invertModalState} />
      <ModalError submitCheck={modalCheck} closeModal={invertModalState} />
    </div>
  );
};

export default Login;
