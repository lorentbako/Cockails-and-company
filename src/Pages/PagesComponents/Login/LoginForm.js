import React, { useState } from "react";
import { Formik } from "formik";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "../../PagesStyles/Login.scss";

const LoginForm = (props) => {
  const user = { uName: "Admin", pass: "Admin123" };
  const [usernameEntered, setUsernameEntered] = useState("");
  const [passEntered, setPassEntered] = useState("");

  const passwordInputed = (event) => {
    setPassEntered(event.target.value);
  };
  const usernameInputed = (event) => {
    setUsernameEntered(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (passEntered === user.pass && usernameEntered === user.uName) {
      alert("Login was Succesful");
    } else {
      props.showModal(true);
    }
  };

  return (
    <>
      <Formik>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="input-style">
            <Form.Label>Username</Form.Label>
            <Form.Control
              type="text"
              name="username"
              onChange={usernameInputed}
            />
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              name="password"
              placeholder="********"
              onChange={passwordInputed}
            />
          </Form.Group>
          <Button className="login-button" type="submit" variant="primary">
            Login
          </Button>
        </Form>
      </Formik>
    </>
  );
};

export default LoginForm;
