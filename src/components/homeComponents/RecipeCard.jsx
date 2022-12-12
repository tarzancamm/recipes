import React from "react";
import { useNavigate } from 'react-router-dom'
import styles from "./RecipeCard.module.css";

const RecipeCard = ({recipe}) => {
  const navigate = useNavigate()

  const handleSeeMore = () => {
    navigate(`/recipe/${recipe.recipe_id}`)
  }

  return (
    <div className={styles['recipe-container']}>
      <div>
        <div className={styles['image-container']}>
          <img src={recipe.image_url} alt="food item"/>
          {/* "https://i0.wp.com/www.lilcookie.com/wp-content/uploads/2018/11/American_chocolate_cake3-square.jpg?fit=1500%2C1500&ssl=1" */}
        </div>
        <h3 className={styles['recipe-title']}>{recipe.recipe_name}</h3>
      </div>
      <div>
        <button className={styles.button} onClick={handleSeeMore}>See More</button>
      </div>
    </div>
  );
};

export default RecipeCard;
