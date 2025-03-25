import React, { useState } from "react";
import Shop from "../src/components/Shop";
import products from "../src/products.json";
import { useParams } from "react-router-dom";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

const Task04 = () => {
  const { sortBy } = useParams();
  const history = useHistory();

  const [key = "price", direction = "asc"] = sortBy?.split("-") || [];

  const handleChange = (e) => {
    history.push(e.target.value);
  };

  const sortProducts = (products, { sortBy, direction }) => {
    return [...products].sort((a, b) => {
      if (direction === "asc") {
        return a[sortBy] - b[sortBy];
      }

      if (direction === "desc") {
        return b[sortBy] - a[sortBy];
      }

      return products;
    });
  };

  const sortedProducts = sortProducts(products, { sortBy: key, direction });

  return (
    <>
      <h1>Task04</h1>

      <select onChange={handleChange} defaultValue="/task04">
        <option value="/task04" disabled hidden>
          Sortuj wedlug
        </option>
        <option value="/task04/price-desc">cena malejąco</option>
        <option value="/task04/price-asc">cena rosnąco</option>
      </select>

      <Shop products={sortedProducts} />
    </>
  );
};

export default Task04;
