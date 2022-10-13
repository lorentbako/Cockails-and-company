import React from "react";
import { useState } from "react";
import Form from "react-bootstrap/Form";

const CategoriesDropdown = (props) => {
  const [categorieSelected, setCategoriesSelected] = useState("All");
  const categoriesList = [
    "Ordinary Drink",
    "Cocktail",
    "Shot",
    "Coffee / Tea",
    "Punch / Party Drink",
  ];

  const handleCategorieChange = (event) => {
    setCategoriesSelected(event);
    console.log(event.target.value);
    props.categorieSelected(categorieSelected);
  };
  /*
  Tried to get the Categories with API and succeded but it was uneccesarely making the app heavy
  const [categorie, setCategorie] = useState("");
  const getCategoriesApiData = async () => {
    const responseCategories = await fetch(
      "https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list"
    ).then((responseCategories) => responseCategories.json());
    setCategorie(responseCategories);
  };

  useEffect(() => {
    getCategoriesApiData();
  });
*/
  return (
    <Form.Select aria-label="" onChange={handleCategorieChange}>
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
