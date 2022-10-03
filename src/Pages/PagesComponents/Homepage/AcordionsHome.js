import React from "react";
import Accordion from "react-bootstrap/Accordion";
const AcordionsHome = () => {
  const accordion_text = [
    {
      key: 1,
      header: "Why did you decide to continue for Web Developement?",
      body_text:
        "I Have always liked programming since i was in Bachelor, and because i have finished studying for Math and Informatics i have always loved programming, by doing different Programming Courses and Some Projects i'm improving my programming skills ",
    },
    {
      key: 2,
      header: "Why do you have three years of experience in Finance?",
      body_text:
        "In the beggining i wanted to just start to work, then i was offered a Bookkeeping role because of my great skills in math, After six months after that role i was promoted to a Finance Team Leader, from then i managed to grow and build a strong team and also grow myself professionally. ",
    },
    {
      key: 3,
      header:
        "How did you decide that you liked Frontend Stack and not Backend",
      body_text:
        "I have knowledge in Backend too for example in Python and SQL, i have tried them also but, I like Frontend more because of the design creativity you can put on the projects because i also like design, which by the way i have some strong knowledge on Adobe Photoshop.",
    },
  ];

  return (
    <div>
      <Accordion>
        {accordion_text.map((acord) => (
          <Accordion.Item eventKey={acord.key}>
            <Accordion.Header>{acord.header}</Accordion.Header>
            <Accordion.Body>{acord.body_text}</Accordion.Body>
          </Accordion.Item>
        ))}
      </Accordion>
    </div>
  );
};

export default AcordionsHome;
