import React from "react";
import styles from "./RecipeCard.module.css";

const RecipeCard = () => {
  return (
    <div className={styles['recipe-container']}>
      <div>
        <div className={styles['image-container']}>
          <img src="https://i0.wp.com/www.lilcookie.com/wp-content/uploads/2018/11/American_chocolate_cake3-square.jpg?fit=1500%2C1500&ssl=1" alt="blah"/>
        </div>
        <h3 className={styles['recipe-title']}>Chocolate Cake</h3>
      </div>
      <div>
        <button className={styles.button}>See More</button>
      </div>
    </div>
  );
};

export default RecipeCard;
