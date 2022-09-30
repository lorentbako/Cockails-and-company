import React from "react";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

const HomeCards = () => {
  const jobs = [
    {
      header: "RoiAcademy",
      title: "ReactJS Course",
      body: "A 2 Month Course, 1 month Learning and the other Learning by practise.\n We had an amazing teacher Shyhrete Buzaku, who taught us a lot of things about React which include but not only : What is React and how to create a React App, How is React build with Components, React Router Dom, HOOKS, STATE SCSS, CSS, HTML etc. ",
      duration: "07/2022 - 08/2022",
    },
    {
      header: "AHIS (Traded as Bulls Media Albania)",
      title: "Finance Team Leader",
      body: `Contributed to the Training and Developement of the
      team.
      Monitored and Assisted the financial performance of
      the organisation.
      Prepared regular Financial reports Daily/ Weekly/
      Monthly/ Yearly.
      Created and updated reguratly Income Statments,
      Reduced manual work up to 40% by automating tasks.
      `,
      duration: "03/2021 - Present",
    },
    {
      header: "AHIS (Traded as Bulls Media Albania)",
      title: "Bookkeeper",
      body: `Recording day to day financial transactions and
      recording Income/Payments into accounting softwares
      (Zoho books, Wave) or CRMs (Monday.com)
      Enter data, maintain records and create reports and
      financial statements
      Created and Developed required simple or complex
      Google Sheets to support the day to day processess.
      Handeling most of the purchase tickets for different
      needs of the Company (On Freshdesk)`,
      duration: "07/2020 - 03/2021",
    },
    {
      header: "AHIS (Traded as Bulls Media Albania)",
      title: "Social Media Manager",
      body: `Handle a large group of social media accounts for
      posting engaging and creative content or creating
      campaigns.
      Managing credit card payments, budgets, reports and
      also allocating budget when needed (in Soldo.com).
      Creating engaging content (using Photoshop, Canva
      etc.)
      `,
      duration: "04/2020 - 07/2020",
    },
  ];
  return (
    <div>
      <Row xs={1} md={2} className="g-4">
        {jobs.map((job) => (
          <Col>
            <Card>
              <Card.Header as="h4">Company: {job.header}</Card.Header>
              <Card.Body>
                <Card.Title>Role: {job.title}</Card.Title>
                <Card.Text>{job.body.split("\n")}</Card.Text>
              </Card.Body>
              <Card.Footer>
                <small className="text-muted">{job.duration}</small>
              </Card.Footer>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default HomeCards;
