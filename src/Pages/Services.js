import React, { useState, useEffect } from "react";
import ServicesCard from "./PagesComponents/Services/ServicesCards";
import Container from "react-bootstrap/Container";

import "./PagesStyles/Services.scss";
import { boolean } from "yup";

const Services = (props) => {
  const borderVariants = [
    "primary",
    "secondary",
    "success",
    "danger",
    "warning",
    "info",
    "dark",
  ];
  const [cocktails, setCocktails] = useState("");

  const getApiData = async () => {
    const response = await fetch(
      `https://www.thecocktaildb.com/api/json/v1/1/search.php?s`
    ).then((response) => response.json());
    setCocktails(response.drinks);
  };

  useEffect(() => {
    getApiData();
  }, 1);
  return (
    <Container>
      <div className="grid-container">
        {cocktails &&
          cocktails.map((drink) => (
            <ServicesCard
              borderVariant={
                borderVariants[
                  Math.floor(Math.random() * borderVariants.length)
                ]
              }
              img={drink.strDrinkThumb}
              name={drink.strDrink}
              enLanguage={drink.strInstructions}
              itLanguage={drink.strInstructionsDE}
              deLanguage={drink.strInstructionsIT}
              category={drink.strCategory}
              ingredients={[
                drink.strIngredient1,
                drink?.strIngredient2,
                drink?.strIngredient3,
                drink?.strIngredient4,
                drink?.strIngredient5,
                drink?.strIngredient6,
              ]
                .filter((item) => typeof item === "string")
                .join(", ")}
            />
          ))}
      </div>
    </Container>
  );
};

export default Services;
