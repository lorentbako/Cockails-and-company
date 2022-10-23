import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import "../../PagesStyles/Services.scss";
import CustomAccordion from "../CustomAccordion";

function ServicesCard(props) {
  return (
    <Card
      bg="light"
      className="mb-2"
      style={{ width: "18rem" }}
      border="warning"
    >
      <Card.Img variant="top" src={props.img} />
      <Card.Body>
        <Card.Text>
          <b> {props.name}</b> ({props.category})
        </Card.Text>
        <Card.Text>
          <CustomAccordion
            horizontal={true}
            titles={[
              ["English", props.enLanguage],
              ["Italian", props.itLanguage],
              ["German", props.deLanguage],
            ]}
          />
        </Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item>Ingredients: {props.ingredients}</ListGroup.Item>
      </ListGroup>
    </Card>
  );
}

export default ServicesCard;
