import React, { useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/esm/Container";
import ModalVideo from "./PagesComponents/ModalVideo";
import Button from "react-bootstrap/Button";

const AboutUs = () => {
  const [people, setPeople] = useState([]);
  const [modalShow, setModalShow] = useState(true);

  const getApiData = async () => {
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "1baf9097admshe1e9a8dc5f82c7ap18e682jsna7eae133420f",
        "X-RapidAPI-Host": "fake-data3.p.rapidapi.com",
      },
    };
    const response = await fetch(
      "https://fake-data3.p.rapidapi.com/fk/persons",
      options
    ).then((response) => response.json());
    setPeople(response);
    console.log(response);
  };
  const showModalHandler = () => {
    setModalShow(true);
  };
  const hideModalHandler = () => setModalShow(false);

  useEffect(() => {
    getApiData();
  }, []);
  return (
    <Container>
      <Button
        onClick={showModalHandler}
        variant="info"
        style={{ margin: "30px 0px" }}
      >
        Company Video Introducion
      </Button>
      <ModalVideo showModal={modalShow} hideModal={hideModalHandler} />
      <Row xs={1} md={3} className="g-4">
        {people &&
          people.data?.map((person) => (
            <Col>
              <Card style={{ width: "18rem" }} bg="light" border="info">
                <Card.Body>
                  <Card.Title>
                    {person.firstname + " " + person.lastname}
                  </Card.Title>
                  <Card.Text>
                    Address:{" "}
                    {[
                      person.address.street,
                      person.address.streetName,
                      person.address.buildingNumber,
                      person.address.city,
                    ].join(", ")}
                  </Card.Text>
                </Card.Body>
                <ListGroup className="list-group-flush">
                  <ListGroup.Item>
                    <b>E-Mail: </b>
                    {person.email}
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <b>Phone:</b> {person.phone}
                  </ListGroup.Item>
                </ListGroup>
                <Card.Body>
                  <Card.Link href={person.website}>Website</Card.Link>
                </Card.Body>
              </Card>
            </Col>
          ))}
      </Row>
    </Container>
  );
};

export default AboutUs;
