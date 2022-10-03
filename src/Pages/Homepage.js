import React from "react";
import Container from "react-bootstrap/esm/Container";
import AcordionsHome from "./PagesComponents/Homepage/AcordionsHome";
import Carusel from "./PagesComponents/Homepage/Carousel";
import HomeCards from "./PagesComponents/Homepage/HomeCards";
import "./PagesStyles/Homepage.scss";

const Homepage = () => {
  return (
    <div className="homepage">
      <Container>
        <div className="carusel">
          <Carusel />
        </div>
        <div className="homecards">
          <HomeCards />
        </div>
        <div className="accordions">
          <AcordionsHome />
        </div>
      </Container>
    </div>
  );
};

export default Homepage;
