import React from "react";
import Container from "react-bootstrap/esm/Container";
import AcordionsHome from "./PagesComponents/AcordionsHome";
import Carusel from "./PagesComponents/Carousel";
import HomeCards from "./PagesComponents/HomeCards";
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
