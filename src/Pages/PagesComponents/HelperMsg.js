import React from "react";
import Button from "react-bootstrap/Button";
import Spinner from "react-bootstrap/Spinner";
import "../PagesStyles/Services.scss";
const CustomSpinner = () => {
  return (
    <>
      <Spinner
        as="span"
        animation="border"
        size="sm"
        role="status"
        aria-hidden="true"
      />
      <span className="visually-hidden">Loading...</span>{" "}
    </>
  );
};

const HelperMsg = (props) => {
  return (
    <div className={props.className ? props.className : "loading-msg"}>
      <Button variant={props.variant ? props.variant : "warning"} disabled>
        {props.children}
        {props.withSpinner && <CustomSpinner />}
      </Button>
    </div>
  );
};

export default HelperMsg;
