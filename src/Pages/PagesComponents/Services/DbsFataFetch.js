import React, { useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";

const DbsFataFetch = () => {
  const [employees, setEmployees] = useState("");

  const fetchApiData = async () => {
    const response = await fetch(
      "https://praktika-roi-default-rtdb.europe-west1.firebasedatabase.app/employees.json"
    ).then((response) => response.json());
    const data = await response;
    const allEmployees = [];
    for (const key in data) {
      allEmployees.push({
        id: key,
        firstName: data[key].firstName,
        lastName: data[key].lastName,
        age: data[key].age,
        email: data[key].email,
        description: data[key].description,
      });
    }
    setEmployees(allEmployees);
  };

  useEffect(() => fetchApiData, []);

  return (
    <>
      {employees &&
        employees.map((employee) => (
          <Card style={{ width: "18rem" }} key={employee.id}>
            <Card.Header>
              <b>{`${employee.firstName} ${employee.lastName} , ${employee.age} yrs `}</b>
            </Card.Header>
            <ListGroup variant="flush">
              <ListGroup.Item>
                <b> Description: </b>
                {employee.description}
              </ListGroup.Item>
              <ListGroup.Item>{employee.email}</ListGroup.Item>
            </ListGroup>
          </Card>
        ))}
    </>
  );
};

export default DbsFataFetch;
