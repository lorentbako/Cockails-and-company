import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Outlet, Link } from "react-router-dom";
import Footer from "./PagesComponents/Footer";
import "./PagesStyles/Layout.scss";

const Layout = () => {
  return (
    <div className="page-container">
      <div className="content">
        <Navbar bg="dark" variant="warning">
          <Container>
            <Navbar.Brand>
              <Link className="link" to="/">
                Lorent
              </Link>
            </Navbar.Brand>
            <Nav className="me-auto">
              <Link className="link" to="/">
                HomePage
              </Link>
              <Link className="link" to="/services">
                Services
              </Link>
              <Link className="link" to="/about">
                About Us
              </Link>
              <Link className="link" to="/contactus">
                Contact Us
              </Link>
              <Link className="link" to="/login">
                Login
              </Link>
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
