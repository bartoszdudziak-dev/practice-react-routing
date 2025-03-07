import React, { useState } from "react";
import Shop from "../src/components/Shop";
import products from "../src/products.json";
import { useParams } from "react-router-dom";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

const Task04 = () => {
  const { sortBy } = useParams();
  const history = useHistory();

  const handleChange = (e) => {
    history.push(e.target.value);
  };

  let filteredProduct;

  if (sortBy === "price-desc") {
    filteredProduct = [...products].sort((a, b) => b.price - a.price);
  } else if (sortBy === "price-asc") {
    filteredProduct = [...products].sort((a, b) => a.price - b.price);
  } else {
    filteredProduct = products;
  }

  return (
    <>
      <h1>Task04</h1>

      <select onChange={handleChange} defaultValue='/task04'>
        <option value="/task04" disabled hidden>
          Sortuj wedlug
        </option>
        <option value="/task04/price-desc">cena malejąco</option>
        <option value="/task04/price-asc">cena rosnąco</option>
      </select>

      <Shop products={filteredProduct} />
    </>
  );
};

export default Task04;
