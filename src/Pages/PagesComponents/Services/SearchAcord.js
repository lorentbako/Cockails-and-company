import Accordion from "react-bootstrap/Accordion";
import { useAccordionButton } from "react-bootstrap/AccordionButton";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Col from "react-bootstrap/esm/Col";
import Button from "react-bootstrap/Button";
import { useContext, useRef } from "react";
import CategoriesDropdown from "./CategoriesDropdown";
import AccordionContext from "react-bootstrap/AccordionContext";

function ContextAwareToggle({ eventKey, callback }) {
  const { activeEventKey } = useContext(AccordionContext);
  const decoratedOnClick = useAccordionButton(
    eventKey,
    () => callback && callback(eventKey)
  );

  const isCurrentEventKey = activeEventKey === eventKey;

  return (
    <Button variant="info" onClick={decoratedOnClick}>
      {isCurrentEventKey ? "Collapse" : "Expand Search"}
    </Button>
  );
}

function SearchAccord(props) {
  const searchValueRef = useRef("");

  const handleSearch = (event) => {
    const searchValue = searchValueRef.current.value;
    props.searchValueGet(searchValue);
  };

  return (
    <Accordion defaultActiveKey="1" className={props.className}>
      <Card>
        <Card.Header>
          <Row>
            <Col>
              <ContextAwareToggle eventKey="0"></ContextAwareToggle>
            </Col>
            <Col>
              <InputGroup className="mb-3">
                <Form.Control
                  placeholder="Search"
                  aria-label="Search"
                  aria-describedby="basic-addon2"
                  onChange={handleSearch}
                  onBlur={handleSearch}
                  ref={searchValueRef}
                />
              </InputGroup>
            </Col>
          </Row>
        </Card.Header>
        <Accordion.Collapse eventKey="0">
          <Card.Body>
            <CategoriesDropdown categorieSelected={props.finalCategorie} />
          </Card.Body>
        </Accordion.Collapse>
      </Card>
    </Accordion>
  );
}

export default SearchAccord;
