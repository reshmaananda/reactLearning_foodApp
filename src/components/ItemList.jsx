import React from "react";
import Item from "./Item";

const ItemList = ({ foodDetails, isLoading }) => {
  return (
    <div>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <div>
          <h1>Ingredients</h1>
          {foodDetails.extendedIngredients.map((item) => (
            <Item item={item} />
          ))}
        </div>
      )}
    </div>
  );
};

export default ItemList;
