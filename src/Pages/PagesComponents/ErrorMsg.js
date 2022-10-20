import React from "react";
import Form from "react-bootstrap/Form";

const ErrorMsg = (props) => {
  return (
    <Form.Text className="text-muted">
      <p style={{ color: "#E58282" }}>
        {props.touched && props.error ? props.error : null}
      </p>
    </Form.Text>
  );
};

export default ErrorMsg;
