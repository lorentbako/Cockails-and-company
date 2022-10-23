import React, { useState, useEffect } from "react";
import ServicesCard from "./PagesComponents/Services/ServicesCards";
import Container from "react-bootstrap/Container";

import "./PagesStyles/Services.scss";
import SearchAccord from "./PagesComponents/Services/SearchAcord";
import HelperMsg from "./PagesComponents/HelperMsg";

const Services = (props) => {
  const [cocktails, setCocktails] = useState("");
  const [valueToSearch, setValueToSearch] = useState("");
  const [categorieSelectedImported, setcategorieSelectedImported] =
    useState("All");
  const [isLoading, setIsLoading] = useState(true);

  const getFinalSearchvalue = (event) => {
    setValueToSearch(event);
  };
  const handleFinalCategorieSelected = (event) => {
    setcategorieSelectedImported(event);
    console.log(event);
  };

  const getApiData = async () => {
    const response = await fetch(
      `https://www.thecocktaildb.com/api/json/v1/1/search.php?s`
    ).then((response) => response.json());
    console.log(response);
    setCocktails(response.drinks);
    setTimeout(() => {
      setIsLoading(false);
    }, 500);
  };
  let filteredArray = [];
  let searchFilteredArray = [];
  try {
    if (categorieSelectedImported === "All") {
      filteredArray = [...cocktails];
    } else {
      filteredArray = cocktails?.filter(
        (cocktail) => cocktail.strCategory === categorieSelectedImported
      );
    }
    searchFilteredArray = filteredArray.filter((item) =>
      item.strDrink.toLowerCase().includes(valueToSearch.toLowerCase(), 0)
    );
  } catch (error) {}

  useEffect(() => {
    getApiData();
  }, []);

  return (
    <Container>
      <SearchAccord
        className="search-accord"
        searchValueGet={getFinalSearchvalue}
        finalCategorie={handleFinalCategorieSelected}
      />
      {isLoading && (
        <HelperMsg withSpinner={true}>
          We are Loading Amazing Cocktails...{" "}
        </HelperMsg>
      )}
      {cocktails.length !== 0 &&
        !isLoading &&
        searchFilteredArray.length === 0 && (
          <HelperMsg withSpinner={false}>No results found </HelperMsg>
        )}
      {!isLoading && cocktails.length === 0 && (
        <HelperMsg withSpinner={true}>
          We are trying to fetch the data...
        </HelperMsg>
      )}
      <div className="grid-container">
        {!isLoading &&
          searchFilteredArray &&
          searchFilteredArray.map((drink) => (
            <ServicesCard
              key={drink.strDrink}
              img={drink.strDrinkThumb}
              name={drink.strDrink}
              enLanguage={drink.strInstructions}
              itLanguage={drink.strInstructionsIT}
              deLanguage={drink.strInstructionsDE}
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
