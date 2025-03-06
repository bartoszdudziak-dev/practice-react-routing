import React from "react";

function Product({ name, description, category, price }) {
  return (
    <div>
      <h2>{name}</h2>
      <p>{description}</p>
      <div>
        <span>{category}</span> <span>{price}</span>
      </div>
    </div>
  );
}

export default Product;
