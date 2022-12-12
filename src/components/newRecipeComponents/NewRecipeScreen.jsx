import React, { useState } from "react";
import { Formik } from "formik";
import axios from "axios";
import styles from "./NewRecipeScreen.module.css";

const NewRecipeScreen = () => {
  const [ingredients, setIngredients] = useState([]);
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState("");

  const initialValues = {
    type: "",
    recipeName: "",
    imageURL: "",
    prepTime: "",
    cookTime: "",
    serves: "",
    ingredients: [],
    instructions: "",
  };

  const addIngredient = () => {
    setIngredients([...ingredients, { name, quantity }]);
    setName("");
    setQuantity("");
  };

  const onSubmit = (values) => {
    values.ingredients = ingredients;
    axios
      .post(`https://recipes.devmountain.com/recipes`, values)
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err)
      });
  };

  // async function addRecipe(values) {
  //   const response = await fetch(`https://recipes.devmountain.com/recipes`, {
  //     method: "POST",
  //     body: JSON.stringify(values),
  //     headers: {
  //       "CONTENT-TYPE": "recipe/JSON",
  //     },
  //   });
  //   const data = await response.json();
  //   console.log(data);
  // }

  const ingredientDisplay = ingredients.map((ingredient) => {
    return (
      <li>
        {ingredient.quantity} {ingredient.name}
      </li>
    );
  });

  return (
    <section className={styles.mainsection}>
      <h1>Tell us about your recipe</h1>
      <Formik initialValues={initialValues} onSubmit={onSubmit}>
        {({ values, handleChange, handleSubmit }) => (
          <form onSubmit={handleSubmit}>
            <div className={styles.textcontainer}>
              <input
                type="text"
                placeholder="Name"
                value={values.recipeName}
                onChange={handleChange}
                name="recipeName"
              />
              <input
                type="text"
                placeholder="Image URL"
                value={values.imageURL}
                onChange={handleChange}
                name="imageURL"
              />
            </div>
            <div className={styles.radiocontainer}>
              <span>
                <input
                  type="radio"
                  className={styles.radio}
                  value="Cook"
                  onChange={handleChange}
                  name="type"
                />
                <h5>Cook</h5>
              </span>
              <span>
                <input
                  type="radio"
                  className={styles.radio}
                  value="Bake"
                  onChange={handleChange}
                  name="type"
                />
                <h5>Bake</h5>
              </span>
              <span>
                <input
                  type="radio"
                  className={styles.radio}
                  value="Drink"
                  onChange={handleChange}
                  name="type"
                />
                <h5>Drink</h5>
              </span>
            </div>
            <div className={styles.textcontainer}>
              <input
                type="text"
                placeholder="Prep Time"
                value={values.prepTime}
                onChange={handleChange}
                name="prepTime"
              />
              <input
                type="text"
                placeholder="Cook Time"
                value={values.cookTime}
                onChange={handleChange}
                name="cookTime"
              />
              <input
                type="text"
                placeholder="Serves"
                value={values.serves}
                onChange={handleChange}
                name="serves"
              />
            </div>
            <div className={styles.textcontainer}>
              <div className={styles.ingredientinputs}>
                <input
                  type="text"
                  placeholder="Ingredient"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
                <input
                  type="text"
                  placeholder="Quantity"
                  value={quantity}
                  onChange={(e) => setQuantity(e.target.value)}
                />
              </div>
              <ul>{ingredientDisplay}</ul>
            </div>
            <button
              type="button"
              className={styles.button_orange}
              onClick={addIngredient}
            >
              Add Another
            </button>
            <textarea
              placeholder="What are the instructions?"
              rows={5}
              value={values.instructions}
              onChange={handleChange}
              name="instructions"
            />
            <button type="submit" className={styles.button}>
              Save
            </button>
          </form>
        )}
      </Formik>
    </section>
  );
};

export default NewRecipeScreen;
