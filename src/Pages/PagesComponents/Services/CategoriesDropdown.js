import React from "react";
import { useRef } from "react";
import Form from "react-bootstrap/Form";

const CategoriesDropdown = (props) => {
  const enteredSearchRef = useRef("");
  const categoriesList = [
    "Ordinary Drink",
    "Cocktail",
    "Shot",
    "Coffee / Tea",
    "Punch / Party Drink",
  ];

  const handleCategorieChange = (event) => {
    const categorieSelected = enteredSearchRef.current.value;
    console.group(categorieSelected, enteredSearchRef.current.value);
    props.categorieSelected(categorieSelected);
  };
  return (
    <Form.Select
      aria-label=""
      onChange={handleCategorieChange}
      ref={enteredSearchRef}
    >
      <option value="All">Select the Category</option>
      {categoriesList.map((categorie) => (
        <option value={categorie} key={categorie}>
          {categorie}
        </option>
      ))}
    </Form.Select>
  );
};

export default CategoriesDropdown;
