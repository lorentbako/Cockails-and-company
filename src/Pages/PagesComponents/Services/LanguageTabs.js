import ListGroup from "react-bootstrap/ListGroup";
import Tab from "react-bootstrap/Tab";

const LanguageTabs = (props) => {
  return (
    <Tab.Container id="list-group-tabs-example" defaultActiveKey="#link1">
      <ListGroup horizontal>
        <ListGroup.Item action href="#link1">
          English
        </ListGroup.Item>
        <ListGroup.Item action href="#link2">
          Italian
        </ListGroup.Item>
        <ListGroup.Item action href="#link3">
          German
        </ListGroup.Item>
      </ListGroup>
      <Tab.Content>
        <Tab.Pane eventKey="#link1">{props.enLanguageDescr}</Tab.Pane>
        <Tab.Pane eventKey="#link2">{props.itLanguageDescr}</Tab.Pane>
        <Tab.Pane eventKey="#link3">{props.deLanguageDescr}</Tab.Pane>
      </Tab.Content>
    </Tab.Container>
  );
};

export default LanguageTabs;
