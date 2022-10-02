import React from "react";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

const HomeCards = () => {
  const jobs = [
    {
      key: "job4",
      header: "RoiAcademy",
      title: "ReactJS Course",
      body: (
        <>
          A 2 Month Course, 1 month Learning and the other Learning by practise.
          We had an amazing teacher Shyhrete Buzaku, who taught us a lot of
          things about React which include but not only :
          <ul>
            <li>What is React and how to create a React App</li>
            <li>How is React build with Components</li>
            <li>React Router Dom, HOOKS, STATE</li>
            <li>SCSS, CSS, CSS Modules, HTML etc. </li>
          </ul>
        </>
      ),
      duration: "07/2022 - 08/2022",
    },
    {
      key: "job3",
      header: "AHIS (Traded as Bulls Media Albania)",
      title: "Finance Team Leader",
      body: (
        <ul>
          <li>Contributed to the Training and Developement of the team.</li>
          <li>
            Monitored and Assisted the financial performance of the
            organisation.
          </li>
          <li>
            Prepared regular Financial reports Daily/ Weekly/ Monthly/ Yearly.
          </li>
          <li>
            Created and updated reguratly Income Statments, Reduced manual work
            up to 40% by automating tasks.
          </li>
        </ul>
      ),
      duration: "03/2021 - Present",
    },
    {
      key: "job2",
      header: "AHIS (Traded as Bulls Media Albania)",
      title: "Bookkeeper",
      body: (
        <ul>
          <li>
            Recording day to day financial transactions and recording
            Income/Payments into accounting softwares (Zoho books, Wave) or CRMs
            (Monday.com)
          </li>
          <li>
            Enter data, maintain records and create reports and financial
            statements
          </li>
          <li>
            Created and Developed required simple or complex Google Sheets to
            support the day to day processess.
          </li>
          <li>
            Handeling most of the purchase tickets for different needs of the
            Company (On Freshdesk){" "}
          </li>{" "}
        </ul>
      ),
      duration: "07/2020 - 03/2021",
    },
    {
      key: "job1",
      header: "AHIS (Traded as Bulls Media Albania)",
      title: "Social Media Manager",
      body: (
        <ul>
          <li>
            Handle a large group of social media accounts for posting engaging
            and creative content or creating campaigns.
          </li>
          <li>
            Managing credit card payments, budgets, reports and also allocating
            budget when needed (in Soldo.com).
          </li>
          <li>Creating engaging content (using Photoshop, Canva etc.)</li>
        </ul>
      ),
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
                <Card.Text>{job.body}</Card.Text>
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
