import React from "react";
import sushiImage from "../../assets/sushi.jpg";
import styles from "./Header.module.css";
import HeaderCartButton from "./HeaderCartButton";

function Header(props) {
  return (
    <React.Fragment>
      <header className={styles.header}>
        <h1>Japan Kitchen</h1>
        <HeaderCartButton />
      </header>
      <div className={styles['main-image']}>
        <img src={sushiImage} alt="" />
      </div>
    </React.Fragment>
  );
}

export default Header;
