import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "./PagesComponents/Footer";
import "./PagesStyles/Layout.scss";

const Layout = () => {
  return (
    <div className="page-container">
      <div className="content">
        <Navbar bg="dark" variant="dark">
          <Container>
            <Navbar.Brand href="/">Lorent</Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link href="/">HomePage</Nav.Link>
              <Nav.Link href="/services">Services</Nav.Link>
              <Nav.Link href="/about">About Us</Nav.Link>
              <Nav.Link href="/login">Login</Nav.Link>
            </Nav>
          </Container>
        </Navbar>
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
