import React from "react";
import Col from "react-bootstrap/esm/Col";
import Row from "react-bootstrap/esm/Row";
import "../PagesStyles/Footer.scss";
import Container from "react-bootstrap/Container";

const Footer = () => {
  return (
    <div className="footer">
      <Container>
        <Row>
          <Col>
            <br />© 2022 Lorent Bako
          </Col>
          <Col>
            <br />
            Tirana, Albania
          </Col>
          <Col>
            Contact:{" "}
            <Row>
              <a href="https://www.linkedin.com/in/lorentbako/">LinkedIn</a>{" "}
            </Row>
            <a href="mailto: lorentbako@gmail.com">lorentbako@gmail.com</a>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Footer;
