import React, { useEffect, useState } from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/esm/Container";
import ModalVideo from "./PagesComponents/ModalVideo";
import Button from "react-bootstrap/Button";
import "./PagesStyles/AboutUs.scss";
import HelperMsg from "./PagesComponents/HelperMsg";
import CustomCard from "./PagesComponents/CustomCard";

const AboutUs = () => {
  const [people, setPeople] = useState([]);
  const [modalShow, setModalShow] = useState(true);
  const [isLoading, setIsLoading] = useState(true);

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
    setTimeout(() => {
      setIsLoading(false);
    }, 400);
  };

  const modalVisability = () => setModalShow(!modalShow);

  useEffect(() => {
    getApiData();
  }, []);
  return (
    <Container className="cards-container">
      <Button
        onClick={modalVisability}
        variant="info"
        style={{ margin: "30px 0px" }}
      >
        Company Video Introducion
      </Button>
      <ModalVideo showModal={modalShow} hideModal={modalVisability} />
      <Row xs={1} md={3} className="g-4">
        {isLoading && (
          <HelperMsg withSpinner={true}>
            We are loading Company Employees...{" "}
          </HelperMsg>
        )}
        {!isLoading && people.length === 0 && (
          <HelperMsg withSpinner={true}>
            We are having problems pulling data...{" "}
          </HelperMsg>
        )}
        {!isLoading &&
          people &&
          people.data?.map((person) => (
            <Col>
              <CustomCard
                key={person.email}
                title={person.firstname + " " + person.lastname}
                cardText={
                  "Address: " +
                  [
                    person.address.street,
                    person.address.streetName,
                    person.address.buildingNumber,
                    person.address.city,
                  ].join(", ")
                }
                listItem1={
                  <>
                    <b>E-Mail: </b> {person.email}
                  </>
                }
                listItem2={
                  <>
                    <b>Phone:</b> {person.phone}
                  </>
                }
                link={person.website}
              />
            </Col>
          ))}
      </Row>
    </Container>
  );
};

export default AboutUs;
