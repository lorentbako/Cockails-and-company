import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
const CustomAccordion = (props) => {
  return (
    <Tabs
      defaultActiveKey={props.titles[0][0]}
      id="justify-tab-example"
      className="mb-3"
      variant={props.variant ? "pills" : "tabs"}
      justify
    >
      {props.titles?.map((item) => (
        <Tab key={item[0]} eventKey={item[0]} title={item[0]}>
          {item[1]}
        </Tab>
      ))}
    </Tabs>
  );
};

export default CustomAccordion;
