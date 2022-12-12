import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import styles from "./DetailScreen.module.css";

const DetailScreen = () => {
  const { id } = useParams();
  const [recipe, setRecipe] = useState({});
  console.log(recipe);

  useEffect(() => {
    axios.get(`https://recipes.devmountain.com/recipes/${id}`).then((res) => {
      setRecipe(res.data);
    });
  }, [id]);

  return (
    <section>
      <div
        className={styles.details_banner}
        style={{
          backgroundSize: "cover",
          background: `url(${recipe.image_url})`,
        }}
      >
        <div className={styles.recipe_name}>{recipe.recipe_name}</div>
      </div>
      <div className={styles.descriptions}>
        <div className={styles.recipe}>
          <h2 className={styles.title}>Recipe</h2>
          <h4>Prep Time: {recipe.prep_time}</h4>
          <h4>Cook Time: {recipe.cook_time}</h4>
          <h4>Serves: {recipe.serves}</h4>
          <br />
          <br />
          <h2 className={styles.title}>Ingredients</h2>
          {recipe.ingredients &&
            recipe.ingredients.map((ingredient) => {
              return (
                <h4>
                  {ingredient.quantity} {ingredient.ingredient}
                </h4>
              );
            })}
        </div>
        <div className={styles.instructions}>
          <h2 className={styles.title}>Instructions</h2>
          <p>
            {recipe.instructions && JSON.parse(recipe.instructions)}
          </p>
        </div>
      </div>
    </section>
  );
};

export default DetailScreen;
