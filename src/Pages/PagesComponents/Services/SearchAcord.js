import Accordion from "react-bootstrap/Accordion";
import { useAccordionButton } from "react-bootstrap/AccordionButton";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Col from "react-bootstrap/esm/Col";
import Button from "react-bootstrap/Button";
import { useState } from "react";
import CategoriesDropdown from "./CategoriesDropdown";

function CustomToggle({ children, eventKey }) {
  const decoratedOnClick = useAccordionButton(eventKey, () =>
    console.log("totally custom!")
  );

  return (
    <Button variant="info" onClick={decoratedOnClick}>
      {children}
    </Button>
  );
}

function SearchAccord(props) {
  const [searchValue, setSearchValue] = useState("");

  const handleSearch = (event) => {
    setSearchValue(event);
    props.searchValueGet(searchValue);
  };
  const upCategorieSelected = (event) => {
    props.finalCategorie(event);
  };

  return (
    <Accordion defaultActiveKey="0" className={props.className}>
      <Card>
        <Card.Header>
          <Row>
            <Col>
              <CustomToggle eventKey="0">Expand Search</CustomToggle>
            </Col>
            <Col>
              <InputGroup className="mb-3">
                <Form.Control
                  placeholder="Search"
                  aria-label="Search"
                  aria-describedby="basic-addon2"
                  onChange={handleSearch}
                  onBlur={handleSearch}
                />
              </InputGroup>
            </Col>
          </Row>
        </Card.Header>
        <Accordion.Collapse eventKey="0">
          <Card.Body>
            <CategoriesDropdown categorieSelected={upCategorieSelected} />
          </Card.Body>
        </Accordion.Collapse>
      </Card>
    </Accordion>
  );
}

export default SearchAccord;
