import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import Form from "react-bootstrap/Form";
import ErrorMsg from "./ErrorMsg";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import "../PagesStyles/ContactUs.scss";

const ContactForm = () => {
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      age: "",
      email: "",
      description: "",
    },
    validationSchema: Yup.object({
      firstName: Yup.string()
        .max(15, "Must be 15 characters or less")
        .required("Required"),
      lastName: Yup.string()
        .max(20, "Must be 20 characters or less")
        .required("Required"),
      age: Yup.number("Age must be a number")
        .required("Required")
        .positive("Must be a positive Number")
        .integer("Must be a positive Number"),
      email: Yup.string().email("Invalid email address").required("Required"),
      description: Yup.string()
        .min(30, "Must be 30 characters or more")
        .required("Required"),
    }),
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <Container>
      <form className="form" onSubmit={formik.handleSubmit}>
        <h2 className="header">Contact Us</h2>
        <Form.Group controlId="firstName">
          <Form.Label>First Name</Form.Label>
          <Form.Control
            type="firstName"
            placeholder="Enter your First Name"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.firstName}
          />
          <ErrorMsg
            touched={formik.touched.firstName}
            error={formik.errors.firstName}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="lastName">
          <Form.Label>Last Name</Form.Label>
          <Form.Control
            type="lastName"
            placeholder="Enter Last Name"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.lastName}
          />
          <ErrorMsg
            touched={formik.touched.lastName}
            error={formik.errors.lastName}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="age">
          <Form.Label>Age</Form.Label>
          <Form.Control
            type="age"
            placeholder="Enter your Age"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.age}
          />
          <ErrorMsg touched={formik.touched.age} error={formik.errors.age} />
        </Form.Group>

        <Form.Group className="mb-3" controlId="email">
          <Form.Label>E-mail</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter your email"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
          />
          <ErrorMsg
            touched={formik.touched.email}
            error={formik.errors.email}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="description">
          <Form.Label>Description</Form.Label>
          <Form.Control
            type="description"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.description}
          />
          <ErrorMsg
            touched={formik.touched.description}
            error={formik.errors.description}
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </form>
    </Container>
  );
};

export default ContactForm;
