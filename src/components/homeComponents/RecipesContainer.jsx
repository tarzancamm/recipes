import React, { useState, Fragment } from "react";
import RecipeCard from "./RecipeCard";
import styles from "./RecipesContainer.module.css";

const RecipesContainer = (props) => {
  const [searchedRecipe, setSearchedRecipe] = useState();

  const displayRecipes = props.recipes
    .filter((recipe) => {
      let title = recipe.recipe_name.toLowerCase();
      let search = searchedRecipe.toLowerCase();
      return title.includes(search);
    })
    .map((recipe) => {
      return <RecipeCard recipe={recipe} />;
    });

  const changeRecipesHandler = (event) => {
    setSearchedRecipe(event.target.value);
  };

  return (
    <Fragment>
      <div className={styles.search}>
        <input
          type="text"
          onChange={changeRecipesHandler}
          value={searchedRecipe}
          placeholder="Search for a recipe"
        />
      </div>
      <div>
        {displayRecipes ? displayRecipes : <h3>No Recipes to Display</h3>}
      </div>
    </Fragment>
  );
};

export default RecipesContainer;
