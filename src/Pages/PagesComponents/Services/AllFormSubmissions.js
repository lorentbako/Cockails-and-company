import React, { useEffect, useState } from "react";
import CustomCard from "../CustomCard";
import HelperMsg from "../HelperMsg";
const AllFormSubmissions = () => {
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
      {employees && employees.length === 0 && (
        <HelperMsg>No tickets found.</HelperMsg>
      )}
      {!employees && (
        <HelperMsg withSpinner={true}>
          We are loading tickets from Databse...
        </HelperMsg>
      )}
      {employees &&
        employees.map((employee) => (
          <CustomCard
            key={employee.id}
            title={
              <b>{`${employee.firstName} ${employee.lastName}, ${employee.age}yrs `}</b>
            }
            cardText={employee.description}
            listItem1={"Email: " + employee.email}
          />
        ))}
    </>
  );
};

export default AllFormSubmissions;
