import React from "react";
import styles from "./item.module.css";

const Item = ({ item }) => {
  return (
    <div>
      <div className={styles.itemContainer}>
        <div className={styles.itemImage}>
          <img
            className={styles.image}
            src={
              `https://spoonacular.com/cdn/ingredients_100x100/` + item.image
            }
          />
        </div>
        <div className={styles.itemNameContainer}>
          <div className={styles.itemName}>{item.name}</div>
          <div className={styles.itemAmount}>
            {item.amount} {item.unit}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Item;
