import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import LanguageTabs from "./LanguageTabs";

function ServicesCard(props) {
  return (
    <Card border={props.borderVariant} style={{ width: "18rem" }}>
      <Card.Img variant="top" src={props.img} />
      <Card.Body>
        <Card.Text>
          <b> {props.name}</b> ({props.category})
        </Card.Text>
        <Card.Text>
          <LanguageTabs
            enLanguageDescr={props.enLanguage}
            itLanguageDescr={props.itLanguage}
            deLanguageDescr={props.deLanguage}
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
