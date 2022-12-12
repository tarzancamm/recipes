import React from "react";
import { Link } from "react-router-dom";
import styles from "./Header.module.css"

const Header = () => {
  return (
    <header className={styles.header}>
      <h2 className={styles['header-title']}>Devmountain Eatery</h2>
      <nav className={styles['header-title__items']}>
        <Link to="/">
          <button>Home</button>
        </Link>
        <Link to="/newRecipe">
          <button>Add Recipe</button>
        </Link>
      </nav>
    </header>
  );
};

export default Header;
