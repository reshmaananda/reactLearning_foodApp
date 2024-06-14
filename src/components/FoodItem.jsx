import React from "react";
import styles from "./fooditem.module.css";

const FoodItem = ({ food, setFoodId }) => {
  return (
    <div className={styles.itemContainer}>
      <img className={styles.itemImage} src={food.image} alt={food.title} />
      <div className={styles.itemContent}>
        <p className={styles.itemName}>{food.title}</p>
      </div>
      <div className={styles.itemButtonContainer}>
        <button
          onClick={() => {
            console.log(food.id);
            setFoodId(food.id);
          }}
          className={styles.itemView}
        >
          View Recipe
        </button>
      </div>
    </div>
  );
};

export default FoodItem;
