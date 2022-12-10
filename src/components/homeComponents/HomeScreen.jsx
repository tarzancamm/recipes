import React, { useState, useEffect } from "react";
import axios from "axios";
import AdBanner from "./AdBanner";
import RecipesContainer from './RecipesContainer'

const HomeScreen = () => {
  const [recipes, setRecipes] = useState([]);

  const getRecipes = () => {
    axios
      .get(`https://recipes.devmountain.com/recipes`)
      .then((res) => {
        setRecipes(res.data);
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getRecipes();
  }, []);

  return (
    <div>
      <AdBanner />
      <RecipesContainer recipes={recipes}/>
    </div>
  );
};

export default HomeScreen;
