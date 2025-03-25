import React from "react";
import products from "./../src/products.json";
import { useParams } from "react-router-dom";
import Shop from "../src/components/Shop";

const Task03 = () => {
  const { category } = useParams();

  const filterProducts = (products, { filterBy, filterValue }) => {
    return products.filter(
      (product) => product[filterBy].toLowerCase() === filterValue
    );
  };

  const fitleredProducts = category
    ? filterProducts(products, { filterBy: "category", filterValue: category })
    : products;

  return (
    <>
      <h1>Task 03</h1>
      <Shop products={fitleredProducts} />
    </>
  );
};

export default Task03;
