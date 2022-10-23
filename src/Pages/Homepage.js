import React from "react";
import Container from "react-bootstrap/esm/Container";
import CustomAccordion from "./PagesComponents/CustomAccordion";
import Carusel from "./PagesComponents/Homepage/Carousel";
import HomeCards from "./PagesComponents/Homepage/HomeCards";
import "./PagesStyles/Homepage.scss";

const Homepage = () => {
  const accordion_text = [
    [
      "Why did you decide to continue for Web Developement?",
      "I Have always liked programming since i was in Bachelor, and because i have finished studying for Math and Informatics i have always loved programming, by doing different Programming Courses and Some Projects i'm improving my programming skills ",
    ],
    [
      "Why do you have three years of experience in Finance?",
      "In the beggining i wanted to just start to work, then i was offered a Bookkeeping role because of my great skills in math, After six months after that role i was promoted to a Finance Team Leader, from then i managed to grow and build a strong team and also grow myself professionally. ",
    ],
    [
      "How did you decide that you liked Frontend Stack and not Backend?",
      "I have knowledge in Backend too for example in Python and SQL, i have tried them also but, I like Frontend more because of the design creativity you can put on the projects because i also like design, which by the way i have some strong knowledge on Adobe Photoshop.",
    ],
  ];

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
          <CustomAccordion
            variant="pills"
            className="CustomAccordion"
            titles={accordion_text}
          />
        </div>
      </Container>
    </div>
  );
};

export default Homepage;
