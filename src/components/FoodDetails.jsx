import React, { useEffect, useState } from "react";
import styles from "./fooddetails.module.css";
import ItemList from "./ItemList";

const FoodDetails = ({ foodId }) => {
  const URL = `https://api.spoonacular.com/recipes/${foodId}/information`;
  const API_KEY = "e45661e9dd8a47b7a123a0e8ff84113f";
  const [foodDetails, setFoodDetails] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function getFoodDetails() {
      const res = await fetch(`${URL}?apiKey=${API_KEY}`);
      const data = await res.json();
      console.log("here");
      console.log(data);
      setFoodDetails(data);
      setIsLoading(false);
    }
    getFoodDetails();
  }, [foodId]);

  return (
    <div>
      <div className={styles.recipeCard}>
        <h1 className={styles.recipeName}>{foodDetails.title}</h1>
        <img className={styles.recipeImage} src={foodDetails.image} alt="" />
        <div className={styles.recipeDetails}>
          <span>
            <strong>Ready in {foodDetails.readyInMinutes} minutes ⏰</strong>
          </span>
          <span>
            <strong>Serves {foodDetails.servings} 🧑‍🤝‍🧑</strong>
          </span>
          <span>
            <strong>
              {foodDetails.vegetarian ? "🟢 Vegetarian" : "🔴 Non Vegetarian"}
            </strong>
          </span>
          <span>
            <strong>{foodDetails.vegan ? "🟡 Vegan" : ""}</strong>
          </span>
        </div>
        <div className={styles.recipeDetails}>
          <span>
            <strong>💲{foodDetails.pricePerServing}</strong>
          </span>
        </div>
        <ItemList foodDetails={foodDetails} isLoading={isLoading} />
        <div className={styles.recipeInstructions}>
          <h1>Instructions</h1>
          <ol>
            {isLoading ? (
              <p>Loading</p>
            ) : (
              foodDetails.analyzedInstructions[0].steps.map((steps) => (
                <li>{steps.step}</li>
              ))
            )}
          </ol>
        </div>
      </div>
    </div>
  );
};

export default FoodDetails;
