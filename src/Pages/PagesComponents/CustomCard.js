import React from "react";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";

const CustomCard = (props) => {
  return (
    <Card style={{ width: "18rem" }} bg="light" border="warning">
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text>{props.cardText}</Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item key="1">{props.listItem1}</ListGroup.Item>
        {props.listItem2 && (
          <ListGroup.Item key="2">{props.listItem2}</ListGroup.Item>
        )}
      </ListGroup>
      {props.link && (
        <Card.Body>
          <Card.Link href={props.link}>Website</Card.Link>
        </Card.Body>
      )}
    </Card>
  );
};

export default CustomCard;
